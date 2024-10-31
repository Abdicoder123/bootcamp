# Sample list of words
words = ["level", "elephant", "ruby", "book", "hello"]
for i in words
    puts "Word: #{i}"
    reverse_word = i.reverse.downcase
    if i == reverse_word
        puts "- Palindrome: Yes"
    elsif i != reverse_word
        puts "- Palindrome: No"
    elsif i.include? "e"
        puts "- Contains 'e': Yes"
    elsif !i.include? "e"
        puts "- Contains 'e': No"
    end
    
    length_of_word = i.length
    puts "- Character count: #{length_of_word}"
    if i.include? "ruby"
        replacement = i.gsub!("ruby", "Python")
        puts "- After Replacement: #{replacement}"
    else
        replacement = i
        puts "- After Replacement: #{replacement}"
    end
end

anagram = ["listen", "silent", "heart", "earth", "ruby", "Python"]

for i in anagram
    
end