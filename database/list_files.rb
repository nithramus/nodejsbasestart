module Files
    @list_files = [
        "1-user",
        "2-pings",
        "3-relations",
        "4-tags",
        "5-userimage",
        "6-ping-counter",
        "7-subcomment",
        "8-routes",
        "9-features"
      ]; 
  
    def self.list_files
      return @list_files
    end
  
    def self.list_files=(val)
      @test_val=val;
    end
  end

