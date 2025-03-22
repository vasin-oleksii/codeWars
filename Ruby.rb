def disemvowel(str)
  str.gsub(/[aeiou]/i, '')
end #7kuy

def descending_order(n)
  n.to_s.split('').sort.reverse.join.to_i;
end #7kuy

puts descending_order(312)

def solution(str, ending)
  str.end_with?(ending)
end

puts solution('abc', 'bc')


def likes(names)
  case names.size
  when 0
    'no one likes this'
  when 1
    "#{names[0]} likes this"
  when 2
    "#{names[0]} and #{names[1]} like this"
  when 3
    "#{names[0]}, #{names[1]} and #{names[2]} like this"
  else
    "#{names[0]}, #{names[1]} and #{names.size - 2} others like this"
  end
end

puts likes(['Alex', 'Jacob', 'Mark', 'Max'])