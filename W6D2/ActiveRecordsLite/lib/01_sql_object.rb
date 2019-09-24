require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    # ...
    @@table ||= DBConnection.execute2(<<-SQL)
    SELECT
      *
    FROM
      #{self.table_name}
    SQL
    @@table[0].map!(&:to_sym)
  end
  
  def self.finalize!
     columns.each do |name|
      define_method(name) do
        attributes[name]
      end
      define_method("#{name}=") do |val|
        attributes[name] = val 
      end
    end
  end
  
  def self.table_name=(table_name)
    @table_name = table_name
    # ...
  end
  
  def self.table_name
    # ...
    @table_name ||= self.name.downcase.pluralize
  end
  
  def self.all
    # ...
    results = DBConnection.execute(<<-SQL)
    SELECT
      #{self.table_name}.*
    FROM
      #{self.table_name}
    SQL
    parse_all(results)
  end
  
  def self.parse_all(results)
    results.map { |h| self.new(h) }
  end
  
  def self.find(id)
    # ...
    self.all.find { |obj| obj.id == id }
  end
  
  def initialize(params = {})
  # ...
    params.each do |k,v|
      raise "unknown attribute '#{k}'" unless self.class.columns.include?(k.to_sym)
      self.send("#{k.to_sym}=",v)
    end
  end

def attributes
  # ...
  @attributes ||= {}
end

def attribute_values
  # ...
  self.class.columns.map {|el| self.send(el)}
end

def insert
  # ...
  cols = self.class.columns.drop(1)
  col_names = cols.map(&:to_s).join(", ")
  question_marks = (["?"]*cols.length).join(", ")

  ins = DBConnection.execute(<<-SQL,*attribute_values.drop(1))
    INSERT INTO 
      #{self.class.table_name} (#{col_names})
    VALUES
      (#{question_marks})
    SQL
    self.id = DBConnection.last_insert_row_id
end

def update
  # ...
  setter = self.class.columns.map {|col| col.to_s + "= ?" }.join(", ")

  DBConnection.execute(<<-SQL,*attribute_values,id)
    UPDATE 
      #{self.class.table_name}
    SET 
      #{setter} 
    WHERE 
      #{self.class.table_name}.id = ?
  SQL
end

def save
  # ...
   id.nil? ? insert : update 
end
end
