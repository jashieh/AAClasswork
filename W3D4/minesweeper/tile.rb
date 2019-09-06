class Tile

    def initialize(type)
        @type = type 
        @number = 0 
        @flagged = false
        @revealed = false
    end

    attr_accessor :number, :type, :revealed

    def flag
        if @flagged
            @flagged = false
        else
            @flagged = true
        end
    end

    def reveal
        @revealed = true 
    end

    def to_s
        if @revealed && @type == "*"
            return @type
        elsif @revealed && @type == "-"
            return @number
        elsif @flagged 
            return "F"
        else
            return "x" 
        end
    end

    def ==(type)
        self.type == type
    end

    
end