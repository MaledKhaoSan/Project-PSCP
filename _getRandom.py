import json

flower_dataset = {
    'summer': {
        1:['Daffodil', 'ดอกดารารัตน์', 'Forgiveness', 'a conscious, deliberate decision to release feelings of resentment or vengeance toward a person', 'white' ],
        2:['Hydrangea', 'ดอกไฮเดรนเยีย', 'Apology', 'an admission of error or discourtesy accompanied by an expression of regret', 'purple' ],
        3:['Lavender', 'ดอกลาเวนเดอร์', 'Sincerity', 'honesty of mind', 'purple' ],
        4:['Peony', 'ดอกโบตั๋น', 'Honor', 'respect that is given to someone who is admired', 'orange' ],
        5:['Poppy', 'ดอกป๊อปปี้', 'Consolation', 'the comfort received by a person after a loss or disappointment', 'red' ],
        6:['Rose', 'ดอกกุหลาบ', 'Happiness', "feeling that comes over you when you know life is good and you can't help but smile", 'white' ],
        7:['Zinnia', 'ดอกบานชื่น', 'Lasting affection', 'a feeling of liking and caring for someone', 'red' ]
    
    },
    'spring': {
        1:['Carnation', 'ดอกคาร์เนชั่น', 'Never forgetting', 'The concept of never forgetting someone', 'red' ],
        2:['Dahlia', 'ดอกรักเร่', 'Kindness', 'being generous, helpful, and caring about other people', 'orange' ],
        3:['Forget-me-nots', 'ดอกอย่าลืมฉัน', 'Please do not forget me', 'telling someone you love not to forget the memories between us', 'purple' ],
        4:['Jasmine', 'ดอกมะลิ', 'Amiability', 'Warmth and the deepest friend ship', 'white' ],
        5:['Lily', 'ดอกลิลลี่', 'Purity', 'freedom from adulteration or contamination', 'white' ],
        6:['Orchid', 'ดอกกล้วยไม้', 'Thoughtfulness', "being kind and thinking about other people's needs", 'red' ],
        7:['Tulip', 'ดอกทิวลิป', 'Passion', 'any powerful or compelling emotion or feeling', 'red' ]
    
      },
    'autumn': {
        1:['Amaranth', 'ดอกบานไม่รู้โรย', 'Eternal life', 'life without beginning or end', 'purple' ],
        2:['Chrysanthemum', 'ดอกเบญจมาศ', 'Friendship', 'enduring affection, esteem, intimacy, and trust between two people', 'red' ],
        3:['Iris', 'ดอกไอริส', 'Valor', 'strength of mind or spirit that enables a person to encounter danger with firmness', 'purple' ],
        4:[' Marigold', 'ดอกดาวเรือง', 'despaired love', 'losing someone you love', 'orange' ],
        5:['Moonflower', 'ดอกชมจันทร์', 'Hidden beauty', 'the beauty that comes out of darkness', 'white' ],
        6:['Spider Lily', 'ดอกพลับพลึงแดง', 'Truth', 'adherence to reality, or an indisputable fact', 'red' ],
        7:['Sunflower', 'ดอกทานตะวัน', 'Adoration', 'deep love and respect', 'orange' ]
      },
    'winter': {
        1:['Dianthus', 'ดอกผีเสื้อ', 'Gratitude', 'a feeling of appreciation or thanks', 'red' ],
        2:['Goldenrod', 'ดอกสร้อยทอง ', 'Peacefulness', 'being quiet and calm', 'orange' ],
        3:['Hibiscus', 'ดอกชบา', 'Joy', 'great delight or happiness caused by something exceptionally good', 'red' ],
        4:['Lonicera', 'ดอกสายน้ำผึ้ง', 'New love', 'sweetness for a new love in your life', 'purple' ],
        5:['Magnolia', 'ดอกแมกโนเลีย', 'Nobility', 'nobleness of mind, character, or spirit', 'white' ],
        6:['Snapdragon', 'ดอกลิ้นมังกร', 'Grace', 'a smooth and pleasing way of moving', 'orange' ],
        7:['Violet', 'ดอกไวโอเล็ต', 'Everlasting love', 'love that never comes to the end', 'purple' ]
      },
  }

import random
mycheck = 0
arr = []
# seasons, colors = 'winter','red'
# new_dict = {}
# new_dict["new_random"] = []

# for i in flower_dataset[seasons]:
#     if flower_dataset[seasons][i][4] == colors:
#         new_dict["new_random"].append (flower_dataset[seasons][i])

def createRandomSortedList():
    seasons, colors = 'summer','white'
    new_dict = {}
    new_dict["new_random"] = []

    for i in flower_dataset[seasons]:
      if flower_dataset[seasons][i][4] == colors:
          new_dict["new_random"].append (flower_dataset[seasons][i])
      
    end = (len(new_dict['new_random']))

    tmp = random.randint(0, end-1)
    random_flower_result = (new_dict["new_random"][tmp])

    with open("./static/JSON/text.json", "w") as outfile:
      json.dump(random_flower_result, outfile)

createRandomSortedList()


# for i in new_dict["new_random"]:
#     print(new_dict)

# createRandomSortedList()

# createRandomSortedList()

# def RandomCreateJSON():
#   import json
#   text = [1,2,3,4,5,6,7,8,]

#   with open("./static/JSON/text.json", "w") as outfile:
#     json.dump(text, outfile)
# RandomCreateJSON()