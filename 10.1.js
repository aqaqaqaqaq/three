const io = require('console-read-write');

async function a()
{
    io.write('задание а');
    io.write('введите x');
    let x;
    x=parseFloat(await io.read());
    let g=[];
    g[0]=Number(1);
    g[1]=x-Number(1);
    for (let k = 2;k<7;k++)
    {
        g[k] = (x-2*k+1)*g[k-1]-Math.pow(k-1,2)*g[k-2];
    }
    io.write(g[3]+' '+g[5]+' '+g[6]);
}

async function b() {
    io.write('задание б');
    io.write('введите x');
    let x;
    x = parseFloat(await io.read());
    io.write('введите числа а')
    let a = [];
    for (let i = 0; i < 7; i++) {
        a[i] = parseFloat(await io.read());
    }
    let g = [];
    g[0] = Number(1);
    g[1] = x - Number(1);
    for (let k = 2; k < 7; k++) {
        g[k] = (x - 2 * k + 1) * g[k - 1] - Math.pow(k - 1, 2) * g[k - 2];
    }
    let rez = []
    for (let i = 0; i < 7; i++) {
        rez[i] = a[i] * g[i];
        io.write(rez[i]);
    }
}
async function c() {
    io.write('задание в');
    io.write('введите a');
    let a;
    a = parseFloat(await io.read());
    let g = [];
    g[0] = Number(1);
    g[1] = a - Number(1);
    for (let k = 2; k < 7; k++) {
        g[k] = (a - 2 * k + 1) * g[k - 1] - Math.pow(k - 1, 2) * g[k - 2];
    }
    let rez =Number( 0);
    for (let i = 0; i < 7; i++) {
        rez+=g[i];
    }
    io.write('сумма= ' + rez);
}

async function main()
{
    await a();
    await b();
    await c();
}

main();