#Task 1
fruits = ["apple", "banana", "cherry", "date", "fig", "grape"]
print fruits
print fruits[0]
print fruits[5]
fruits.insert(6,"kiwi")
fruits.delete("cherry")
print fruits

for i in fruits
    if i == "apple"
        print i
    else
        print "- Not an apple"
    end
end

print fruits.length

#task 2
student = {"name" => "John Smith", "age" => 25, "major" => "Computer Science", "gender" => "Male"}
print student
print student["name"]
student["gpa"] = 3.7
student["age"] = 26
print student

for i in student
    if i == "gender"
        print i["gender"]
    else
        print "-"
    end
end