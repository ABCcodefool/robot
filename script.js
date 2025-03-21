document.addEventListener('DOMContentLoaded', function() {
    // 定义获取数据的函数
    function fetchRobotData() {
        fetch('http://10.241.146.212:5000/data')
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    const robotData = data.data;
                    document.getElementById('temperature').textContent = robotData.temperature + '℃';
                    document.getElementById('humidity').textContent = robotData.humidity + '%';
                    document.getElementById('depth').textContent = robotData.depth + '米';
                    document.getElementById('latitude').textContent = robotData.latitude + 'N';
                    document.getElementById('longitude').textContent = robotData.longitude + 'E';
                    document.getElementById('battery').textContent = robotData.battery + '%';
                }
            })
            .catch(error => {
                console.error('获取数据失败:', error);
            });
    }

    // 初始获取数据
    fetchRobotData();

    // 每5秒获取一次数据
    setInterval(fetchRobotData, 5000);
});