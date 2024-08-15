# sum = 0

# for i in range(1, 50):
#     sum = sum + i

# print(sum)





#while loops


# name = input("Enter Your Name: ")
# while name == "andria":
#     print ("Try agan")


# fruits = ["Apple", "Orange", "Banana", "Coconut", "Watermelon"]

# fruits[1] = "Pineapple"

# for fruit in fruits:
#     print(fruit)

# fruits.append("Pineapple")
# fruits.remove("Pineapple")
# fruits.insert(0, "pineapple")
# fruits.sort()
# fruits.reverse()
# fruits.clear()
# print(fruits.index("Coconut"))
# print(fruits.count("Apple"))
# print(fruits.sum)  კრიბავს



# print(fruits)






# print(len(fruits))
# print("Apple" in fruits)

# print(dir(fruits))
# print(help(fruits))

# print(fruits[::-1])



#age = int(input("Enter Your Age: "))
# password = int(input("Enter Your Password: "))


# while age >=18:
#         print("Try Agan: ")



# while num <= 10:
#     sum = sum + num
#     num = num + 2



# if age >= 18:
#     print("You Can Enter Our Site :-)")


# else:
#     print("You Are Under Age And You Cant Visit Our Site")


# def greet(name):
#     print(f"hi{name}")

# # 1 perform a task
# # 2 - return a value


# def get_greeting(name):
#     return f"Hi{name}"

# messege = get_greeting("Andria")
# open("Content.txt", "W")



# calculate the BMI of a person based on their height and weight entered by the user and classify their BMI category using if-else.



# height = int(input("Pleace Enter Your Height: "))
# weight = int(input("Pleace Enter Your Weight: "))

# height_metres = height / 100.0

# bmi = weight / (height * 2)

# if bmi <18.5:
#     bmi_category = "underweight"

# elif bmi < 25:
#     bmi_category = "Normal weight"

# elif bmi < 30:
#     bmi_category = "Overweight"

# else:
#     bmi_category = "Obesity"

# print(f"Your BMI is: {bmi:.2f}")
# print(f"You are classified as: {bmi_category}")

# def my_range(start, end, step):
#     numbers = []

#     while start < end:
#         numbers.append(start)
#         start = start + step
    
#     return numbers

# print(my_range(0, 10 + 1, 1))

# numbers = []
# for i in range(10, 50+1):
#     numbers.append(i)

# def find_last_even(numbers_list):
#     for i in range (len(numbers_list)-1, -1, -1):
#         if numbers_list[i] % 2 == 0:
#             return numbers_list[i]
# print(find_last_even(numbers))


# numbers = []
# for i in range(10, 50 + 1):
#     numbers.append(i)
# def func(numbers):
#     for index in range(len(numbers) -1, -1, -1):
#         if numbers[index] % 4 == 0:
#             return numbers[index]

# print(func(numbers))
from turtle import *
speed(0); hideturtle(); bgcolor("white")
for i in range(80): forward(i); left(59)
done()
