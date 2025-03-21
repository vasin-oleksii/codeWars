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
