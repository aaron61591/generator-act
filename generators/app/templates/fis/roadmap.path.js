module.exports = [
    {
        reg: '/node_modules/**',
        release: false
    },
    {
        // 入口页面 模拟数据
        reg: /^\/views\/([^\/]+)\/backend-data.js$/,
        release: false
    },
    {
        // 入口页面 html 文件
        reg: /^\/views\/([^\/]+)\/\1\.html$/,
        isLayout: true,
        release: '/${base.path}/$1.html',
        packRelease: '/${backend.japid}/$1.html'
    },
    {
        // 入口页面 其他静态文件
        reg: /^\/views\/([^\/]+)\/(.*)$/,
        isLayout: true,
        release: '/${base.path}/${backend.static}/$2',
        packRelease: '/${backend.static}/$2'
    },
    {
        // 组件模板
        reg: /^\/(bower_)?components\/([^\/]+)\/\2\.html$/,
        release: '/${base.path}/${backend.static}/$1c/$2/$2.html',
        packRelease: false
    },
    {
        // 组件 js css
        reg: /^\/(bower_)?components\/([^\/]+)\/\2\.(js|css|scss|less)$/,
        release: false
    },
    {
        // 组件 package.json
        reg: /^\/(bower_)?components\/([^\/]+)\/package.json$/,
        release: false
    },
    {
        // 组件 example
        reg: /^\/bower_components\/([^\/]+)\/example\//,
        release: false
    },
    {
        // 组件 其他静态资源
        reg: /^\/(bower_)?components\/(.*)$/,
        release: '/${base.path}/${backend.static}/$1c/$2',
        packRelease: '/${backend.static}/$1c/$2'
    },
    {
        reg: '/server/**',
        packRelease: false
    },
    {
        reg: '/package.json',
        packRelease: false
    },
    {
        reg: '/map.json',
        release: false
    },
    {
        reg: '**',
        release: false
    }
];
