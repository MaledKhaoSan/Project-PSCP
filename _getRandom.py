import json

flower_dataset = {
    'summer': {
        1:['Daffodil', 'ดอกดารารัตน์', 'Forgiveness', 'a conscious, deliberate decision to release feelings of resentment or vengeance toward a person', 'color' ],
        2:['Hydrangea', 'ดอกไฮเดรนเยีย', 'Apology', 'an admission of error or discourtesy accompanied by an expression of regret', 'color' ],
        3:['Lavender', 'ดอกลาเวนเดอร์', 'Sincerity', 'honesty of mind', 'color' ],
        4:['Peony', 'ดอกโบตั๋น', 'Honor', 'respect that is given to someone who is admired', 'color' ],
        5:['Poppy', 'ดอกป๊อปปี้', 'Consolation', 'the comfort received by a person after a loss or disappointment', 'color' ],
        6:['Rose', 'ดอกกุหลาบ', 'Happiness', "feeling that comes over you when you know life is good and you can't help but smile", 'color' ],
        7:['Zinnia', 'ดอกบานชื่น', 'Lasting affection', 'a feeling of liking and caring for someone', 'color' ]
    
    },
    'spring': {
        1:['Carnation', 'ดอกคาร์เนชั่น', 'Never forgetting', 'The concept of never forgetting someone', 'color' ],
        2:['Dahlia', 'ดอกรักเร่', 'Kindness', 'being generous, helpful, and caring about other people', 'color' ],
        3:['Forget-me-nots', 'ดอกอย่าลืมฉัน', 'Please do not forget me', 'telling someone you love not to forget the memories between us', 'color' ],
        4:['Jasmine', 'ดอกมะลิ', 'Amiability', 'Warmth and the deepest friend ship', 'color' ],
        5:['Lily', 'ดอกลิลลี่', 'Purity', 'freedom from adulteration or contamination', 'color' ],
        6:['Orchid', 'ดอกกล้วยไม้', 'Thoughtfulness', "being kind and thinking about other people's needs", 'color' ],
        7:['Tulip', 'ดอกทิวลิป', 'Passion', 'any powerful or compelling emotion or feeling', 'color' ]
    
      },
    'autumn': {
        1:['Amaranth', 'ดอกบานไม่รู้โรย', 'Eternal life', 'life without beginning or end', 'color' ],
        2:['Chrysanthemum', 'ดอกเบญจมาศ', 'Friendship', 'enduring affection, esteem, intimacy, and trust between two people', 'color' ],
        3:['Iris', 'ดอกไอริส', 'Valor', 'strength of mind or spirit that enables a person to encounter danger with firmness', 'color' ],
        4:[' Marigold', 'ดอกดาวเรือง', 'despaired love', 'losing someone you love', 'color' ],
        5:['Moonflower', 'ดอกชมจันทร์', 'Hidden beauty', 'the beauty that comes out of darkness', 'color' ],
        6:['Spider Lily', 'ดอกพลับพลึงแดง', 'Truth', 'adherence to reality, or an indisputable fact', 'color' ],
        7:['Sunflower', 'ดอกทานตะวัน', 'Adoration', 'deep love and respect', 'color' ]
      },
    'winter': {
        1:['Dianthus', 'ดอกผีเสื้อ', 'Gratitude', 'a feeling of appreciation or thanks', 'color' ],
        2:['Goldenrod', 'ดอกสร้อยทอง ', 'Peacefulness', 'being quiet and calm', 'color' ],
        3:['Hibiscus', 'ดอกชบา', 'Joy', 'great delight or happiness caused by something exceptionally good', 'color' ],
        4:['Lonicera', 'ดอกสายน้ำผึ้ง', 'New love', 'sweetness for a new love in your life', 'color' ],
        5:['Magnolia', 'ดอกแมกโนเลีย', 'Nobility', 'nobleness of mind, character, or spirit', 'color' ],
        6:['Snapdragon', 'ดอกลิ้นมังกร', 'Grace', 'a smooth and pleasing way of moving', 'color' ],
        7:['Violet', 'ดอกไวโอเล็ต', 'Everlasting love', 'love that never comes to the end', 'color' ]
      },
  }


import random
mycheck = 0
arr = []
def createRandomSortedList(start = 1, end = 7):
    tmp = random.randint(start, end)
          
    while tmp in arr:
      if len(arr) == 7:
        arr.clear()
      tmp = random.randint(start, end)
    
    random_flower_result = (flower_dataset['winter'][tmp])
    arr.append(tmp)

    with open("./static/JSON/text.json", "w") as outfile:
      json.dump(random_flower_result, outfile)

# createRandomSortedList()

# def RandomCreateJSON():
#   import json
#   text = [1,2,3,4,5,6,7,8,]

#   with open("./static/JSON/text.json", "w") as outfile:
#     json.dump(text, outfile)
# RandomCreateJSON()