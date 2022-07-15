import {_Page as Page} from '../../miniapp/miniapp';
import {toHex, toBin} from "../../utils/util";

Page({
    data: {
        sample1: [],
        sample2: []
    },
    onLoad(query) {
        const cellsStyle = 'display: flex; font-size: 1.5em; background:white; border-bottom: 1px solid #e4e4e4;padding: 0.5em;';
        const leadingCellStyle = 'flex: 1; text-align: left; color: #666;';
        const cellStyle = 'flex: 2; text-align: left; color: #666;';
        const sample1 = new Array(16).fill(0).map((ele, index) => {
            return [index, toHex(index), toBin(index)];
        }).map(ele => {
            return `<div style="${cellsStyle}">
<span style="${leadingCellStyle}">${ele[0]}</span>
<span style="${cellStyle}">${ele[1]}</span>
<span style="${cellStyle}">${ele[2]}</span>
</div>`;
        });

        const sample2 = new Array(33).fill(0).map((ele, index) => {
            const pow = Math.pow(2, index);
            return [index, pow, toHex(pow)];
        }).map(ele => {
            return `<div style="${cellsStyle}">
<span style="${leadingCellStyle}">2<sup>${ele[0]}</sup></span>
<span style="${cellStyle}">${ele[1]}</span>
<span style="${cellStyle}">${ele[2]}</span>
</div>`;
        });

        this.setData({
            sample1: sample1.join(''),
            sample2: sample2.join('')
        })
    }
});
