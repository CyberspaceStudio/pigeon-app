# 鸽子窝

## Introduction

组队打卡工具

## Requirements

```shell
1. 自行配置react-native的开发环境

2. lint commit message
npm install commitizen -g

3. IDE安装prettier的插件，配置save的时候自动使用prettier进行format, 具体方法自行百度

4. IDE安装gitLens插件
```

## run

```shell
// 开启JS-server
npm run start

// 新开一个终端
npm run android
```

## 本地开发及push
1. 拉到本地后**新建自己的feature分支**，进行开发

```shell
git checkout -b <your-feature-branch-name>
```

2. 形成一次提交
```shell
// 使用npm run commit, 禁止使用git commit
```

3. 开发完毕后，推向远程自己的feature分支

```shell
1. git fetch origin boe
2. git rebase origin/boe
3. git push origin <your-feature-branch-name>
// 建议feature命名   feature/login
// 一个feature结束后，自行回收远程的feature分支
4. git push origin --delete  <your-feature-branch-name>

// 处理冲突时根据gitLens的信息找相关研发沟通解决冲突，严禁处理不可控的冲突
```

4. 在github上从boe向master提pr，找人帮你做code review

> 此部分可参考 [git flow流程实践](https://developer.ibm.com/zh/articles/os-cn-git-and-github-5/)

5. review list

    - 代码规范（空行，魔法数字，代码冗余，业务错误...）
    - commit message  [戳这里](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.uci6olwuf96)
    - 变量，函数命名
    - ...
