require_relative 'db_connection'
require_relative '01_sql_object'

module Searchable
  def where(params)
    # ...
    where_
    DBConnection.execute(<<-SQL)
    SELECT
      *
    FROM
      #{self.table_name}
    WHERE

    SQL
  end
end

class SQLObject
  # Mixin Searchable here...
end
