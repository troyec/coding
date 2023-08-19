import os

rename_dict = {'JavaScript': '10', 'CSS': '11', 'HTML': '12', 'React.js': '13', 'Vue.js': '14', '算法': '15', '计算机网络': '16', '趣味题': '17', 'Node.js': '18', 'Typescript': '19',
               '性能优化': '20', '前端安全': '21', '小程序': '23', 'ES6': '24', '编程题': '26', '设计模式': '27', '工程化': '28', '工具': '29', '计算机基础': '30', 'leetcode': '31', '选择题': '32', '跨端技术': '74'}
# 定义要重命名的文件目录和字典
file_directory = "D:\研二\前端\Coding\md"


# 遍历目录中的文件并进行重命名
for new_name, old_name in rename_dict.items():
    old_path = os.path.join(file_directory, old_name+".md")
    new_path = os.path.join(file_directory, new_name+".md")

    # 检查文件是否存在，并进行重命名
    if os.path.exists(old_path):
        os.rename(old_path, new_path)
        print(f"重命名 {old_name} 为 {new_name}")
    else:
        print(f"文件 {old_name} 不存在，无法重命名")

print("重命名操作完成")
