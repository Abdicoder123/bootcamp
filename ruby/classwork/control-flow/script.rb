=begin
Abdirahman Ali
Julia Lee
=end
#THis is question 1
x = 10
y = 100
if x > y
    print("x is greater than y")
elsif x = y
    print("x is equal to y")
else 
    print("X is less than y")

#this is question 2
x = 100
unless x 
    puts "This isn't eqaul to 100"
else
    puts "This is eqaul to 100"
end

#Question 3
# test_1 should be false
test_1 = (100 + 7)/7 == 400

# test_2 = should be false
test_2 = 34 > (63-50) * 5

# test_3 = should be true
test_3 = ((((2+2) - 2) * 2)/2) == 2

puts test_1
puts test_2
puts test_3

#Question 4
# test_1 should be true
test_1 = (5+5 == 10) && (9*9 > 80)

# test_2 = should be true
test_2 = (1>4) || (12 * 4)/6 == 8

# test_3 = should be false
test_3 = (1 + 2 == 3) && (1+4 > 5)

puts test_1
puts test_2
puts test_3