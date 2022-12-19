import requests
from bs4 import BeautifulSoup

import cssutils
import json

#selectors = {}

font_colors = []
bg_colors = []

url='https://www.studio-es.at'
response = requests.get(url)

soup = BeautifulSoup(response.text, 'html.parser')
headlines = soup.find('body').find_all('article')

#print(len(headlines))

for i in range(len(headlines)):
    style = headlines[i].attrs['style']
    font_color = style[6:13]
    font_colors.append(font_color)
#    print('font color is ' + font_color)

    bg_color = style[25:32]
    bg_colors.append(bg_color)
#    print('background color is ' + bg_code)
#print(font_colors)
#print(bg_colors)

jsonString = json.dumps(font_colors)
jsonFile = open("./data.json", "w")
jsonFile.write(jsonString)
jsonFile.close()


