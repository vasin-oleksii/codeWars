=begin
puts 12.between?(1,12)

puts 12.div(3)
puts 3.+(2)


puts 12.71.round
puts 12.71.ceil
puts -12.71.floor.abs 

def add_two_numbers(a,b)
  a + b
end

a =add_two_numbers(1,2)
puts a

def string_adder (str1,str2) 
  str1 + ' ' +str2
end
puts string_adder("Hello","World")
puts string_adder()


def test_bloks (proc)
  proc.call
end

showOleksii = Proc.new {puts "Oleksii"}
test_bloks(showOleksii)

def test_block (str)
  yield if block_given?
  puts str
end

puts test_block('GAy') {puts "hello"}


10.times {puts 'I gay'}
10.times {|index| puts index}

puts '-----------------'
testValue = 10.times do |index|
  index += 100
  puts index
end

puts testValue

def print_five_times
 5.times 
end
print_five_times


5.times { |index, num| puts index, num}


puts '-----------------'
# 5.upto(10) {|i| puts "I'm on #{i}"}
# 5.downto(0) {|i| puts "I'm on #{i}"}

# 1.step(11,3) {|i| puts "I'm on #{i}"}


# if nil
#   puts 'true'
# else
#   puts 'false'
# end


def numb(n)
  if n.odd? 
    return n + 3
  end
  n - 3

end

print numb(4)

def divisible_by_three_and_four (n) 
  if n % 3 == 0 && n % 4 == 0  
      return true
  end
  false
end 

puts divisible_by_three_and_four(12)
puts divisible_by_three_and_four(3)
puts divisible_by_three_and_four(4)


def dayOfWeek (n)
  case n
  when 1
    return 'Monday'
  when 2
    return 'Tuesday'   
  else 
    return 'Not a valid day'
  end
end

puts dayOfWeek(1)
puts dayOfWeek(2)
puts dayOfWeek(3)


# puts 'What is your name?'
# name = gets.chomp
# def check_is_owner (name)
#   unless name == 'Oleksii'
#     return 'Not the owner'
#   end
#   'Hello owenr'
# end

# puts check_is_owner(name)


puts  '-----------------' unless false

=end


num = 0
while num < 2
  puts num
  num += 1
end
 puts '-----------------'

until num > 10
  puts num
  num += 2
end



a = false 
a ||= 'yess'
puts a


puts <<T 
  Hello
  World
T

puts 'Heeee'.concat('r')
puts 'Heeee'.prepend('r')
puts 'He'.insert(1,'r')
puts 'He' << 'r'
puts 'He'.replace('r')



trest = 'Hello'
puts trest[0, 3]
puts trest.slice!(0, 3)
puts trest



puts 'Hello'.insert(0, '1')
puts ''.empty?\



testMutatuin = 'Hello'
testMutatuin.upcase
puts testMutatuin
testMutatuin.upcase!
puts testMutatuin




string = 'Hello@@@@@@World'
i=0
counter = 0
while i < string.length - 1
  if string[i] == '@'
    i+=1
    next
  end
  i+=1
  counter += 1
end

puts i, counter