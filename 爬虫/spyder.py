import re
import requests
# import jsonpath
import json
import time


output_path = 'raptile_images/goat/'
# 74
tagId = 74
tagIds = list(range(10, 33))
print(tagIds)
map = {'JavaScript': '10', 'CSS': '11', 'HTML': '12', 'React.js': '13', 'Vue.js': '14', '算法': '15', '计算机网络': '16', '趣味题': '17', 'Node.js': '18', 'Typescript': '19',
       '性能优化': '20', '前端安全': '21', '小程序': '23', 'ES6': '24', '编程题': '26', '设计模式': '27', '工程化': '28', '工具': '29', '计算机基础': '30', 'leetcode': '31', '选择题': '32', '跨端技术': '74'}

if __name__ == '__main__':
    for i in range(74, 75):
        time.sleep(3)
        print(i)
        url1 = 'https://fe.ecool.fun/api/exercise/list?vid=9&tagId=' + \
            str(i)+'&pageNum=1&pageSize=1000&orderBy=updateTime&order=desc'
        # url = 'https://image.baidu.com/search/acjson?tn=resultjson_com&logid=10998675905061517714&ipn=rj&ct=201326592&is=&fp=result&queryWord=%E5%B1%B1%E7%BE%8A&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=&z=&ic=&hd=&latest=&copyright=&word=%E5%B1%B1%E7%BE%8A&s=&se=&tab=&width=&height=&face=&istype=&qc=&nc=&fr=&expermode=&force=&pn=' + \
        #     str(pn)+'&rn=30&gsm=3c&1615258839375='
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36',
            'Connection': 'keep-alive',
            'Referer': 'https://fe.ecool.fun/topic-list?pageNumber=2&orderBy=updateTime&order=desc&tagId=0',
            # 'Cookie': 'csrfToken=H8dSOP5FeycmxJuwng-fiFzB; Hm_lvt_dd94ee499774a75a66365f9ea9d0b8fd=1692323574; Hm_lpvt_dd94ee499774a75a66365f9ea9d0b8fd=1692323593'
        }
        response = requests.get(url1, headers=headers)
        print(response)
        py_data = response.json()
        # if(py_data['code'] != 200):
        #     continue
        if(py_data['data']['list'] == None):
            continue
        print(py_data['data']['list'])
        question_arr = py_data['data']['list']
        res = []
        with open('data2.md', 'a+', encoding="utf-8") as f:
            f.write('# ' + str(i) + '\n')

            for item in question_arr:
                exerciseKey = item['exerciseKey']
                print(exerciseKey)
                url2 = 'https://fe.ecool.fun/api/exercise/practice/detail?vid=9&order=desc&orderBy=updateTime&tagId=0&exerciseKey=' + \
                    str(exerciseKey)
                response2 = requests.get(url2, headers=headers)
                data = response2.json()
                title = '# ' + data['data']['title']
                desc = data['data']['desc']
                options = data['data']['options']
                input_text = data['data']['explanation']
                if(title):
                    input_text = title + '\n' + input_text
                if(desc):
                    input_text = desc + '\n' + input_text
                if(options):
                    input_text = options + '\n' + input_text
                markdown_text = input_text.replace("\n", "  \n")
                markdown_text = markdown_text + "  \n"
                f.write(markdown_text)
                # print(type(data))
                # json_str = json.dumps(data, indent=0)
                # json.dump(data, f, ensure_ascii=False, indent=4)
                # f.write(json_str)
                # f.write('\n')
                print(data)

    # img_url = jsonpath.jsonpath(py_data, '$.data[*].middleURL')
    # print(img_url)
    # print('找到关键词:的图片，现在开始下载图片...')
    # j = pn + 1
    # for each in img_url:
    #     print('正在下载第' + str(j) + '张图片，图片地址:' + str(each))
    #     try:
    #         pic = requests.get(each, timeout=10)
    #     except requests.exceptions.ConnectionError:
    #         print('【错误】当前图片无法下载')
    #         continue

    #     dir = output_path + 'goat' + '_' + str(j+400) + '.jpg'
    #     fp = open(dir, 'wb')
    #     fp.write(pic.content)
    #     fp.close()
    #     j = j+1
