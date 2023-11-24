import { useState, useEffect } from "react";

// các trang có thể được hiển thị
const calculateRange = (data, rowsPerPage) => {
    const range = [];
    const num = Math.ceil(data.length / rowsPerPage);
    for (let i =1; i <=num; i++) {
        range.push(i);
    }
    return range;
}

// cắt 1 phần dữ liệu từ 1 trang dựa trên số trang và số hàng
const sliceData = (data, page, rowsPerPage) =>{
    return data.slice((page-1) * rowsPerPage, page * rowsPerPage)
};

// lưu trữ trang thái
const useTable = (data, page, rowsPerPage) => {
    const [tableRange, setTableRange] = useState([]);
    const [slice, setSlice] = useState([]);

    useEffect(() => {
        const range = calculateRange(data, rowsPerPage);
        setTableRange([...range]);

        const slice = sliceData(data, page, rowsPerPage);
        setSlice([...slice]);
    }, [data, setTableRange, page, setSlice]);
    return {slice, range: tableRange};
}

export default useTable;
