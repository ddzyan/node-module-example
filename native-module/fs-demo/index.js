const fs = require('fs');
/**
 * 文件读取和写入
 * 读取文件内容，保存在 buffer 中，再进行写入到
 */

const readAndWriteOfFs = () => {
  const startTime = Date.now();
  fs.readFile('./read.txt', (error, data) => {
    if (error) {
      console.error(error);
    } else {
      // 数据为 Buffer
      fs.writeFile('./txt/readAndWriteOfFs.txt', data, error => {
        if (error) {
          console.error(error);
        }
        console.log('readAndWriteOfFs 消耗时间', Date.now() - startTime);
      });
    }
  });
};

/**
 *  创建读取和写入数据流
 * 通过管道，读取部分数据流再写入到文件中
 * 通过 fs 创建的读取流继承于 emiter
 * 可以通过监听事件了解数据流传输
 */
const readAndWriteOfStream = () => {
  const startTime = Date.now();
  const readStream = fs.createReadStream('./read.txt', { encoding: 'utf-8' });

  readStream.on('data', data => {
    console.log('正在读取');
  });

  readStream.on('error', error => {
    console.error(error);
  });

  readStream.on('end', () => {
    console.log('读取结束');
    console.log('readAndWriteOfStream 消耗时间', Date.now() - startTime);
  });

  const writeStream = fs.createWriteStream('./txt/readAndWriteOfStream.txt');
  readStream.pipe(writeStream);
};

/**
 *  通过打开文件，写入数据，从而实现数据的追加
 */

const openAndWriteOfFs = () => {
  const startTime = Date.now();
  fs.open('./read.txt', 'r+', (error, fd) => {
    // 表示打开文件返回的文件描述符，window中又称文件句柄,可以通过这个读取文件
    if (error) {
      console.error(error);
    } else {
      fs.readFile(fd, { flag: 'r+', encoding: 'utf-8' }, (error, data) => {
        if (error) {
          console.error(error);
        } else {
          fs.writeFile('./txt/openAndWriteOfFs.txt', data, error => {
            if (error) {
              console.log(error);
            }

            fs.close(fd, error => {
              if (error) {
                console.error(error);
              }

              console.log('openAndWriteOfFs 消耗时间', Date.now() - startTime);
            });
          });
        }
      });
    }
  });
};

openAndWriteOfFs();
readAndWriteOfStream();
readAndWriteOfFs();
