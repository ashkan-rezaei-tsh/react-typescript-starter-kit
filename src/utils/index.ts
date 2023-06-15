/* eslint-disable @typescript-eslint/ban-ts-comment */
// import moment from 'moment-jalaali';
// import moment from "jalali-moment";

export const isEmpty = (obj: any) => {
    if (obj === null || obj === "" || obj === undefined) return true;
    if (!Object.entries(obj).length) return true;
    return false;
};

export const asyncLocalStorage = {
    setItem: function (key: string, value: any) {
        return Promise.resolve().then(function () {
            localStorage.setItem(key, value);
        });
    },
    getItem: function (key: any) {
        return Promise.resolve().then(function () {
            return localStorage.getItem(key);
        });
    },
};

export function blobToFile(theBlob: any, fileName: any) {
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    theBlob.lastModifiedDate = new Date();
    theBlob.name = fileName;
    return theBlob;
}

export const commafy = (num: any = 0, delimiterChar = ","): any => {
    try {
        let number = num?.toString()?.replace(".*", "");
        number = number?.split(delimiterChar)?.join("");
        if (isNaN(Number(number))) {
            return number;
        }
        const str = number?.toString()?.split(".");
        if (str[0]?.length >= 4) {
            str[0] = str[0]?.replace(/(\d)(?=(\d{3})+$)/g, "$1" + delimiterChar);
        }
        if (str[1] && str[1]?.length >= 4) {
            str[1] = str[1]?.replace(/(\d{3})/g, "$1 ");
        }

        return str.join(".");
    } catch (error) {
        console.error(error);
    }
};
// export const getCurrentDate = (format = "jYYYY/jMM/jDD") => {
//     return moment().format(format);
// };
// export const convertTimeStamp = (timeStamp: any) => {
//     try {
//         const d = moment(timeStamp);
//         return `${d.hour()}:${d.minute()}:${d.second()}`;
//     } catch (error) {
//         console.log(error);
//     }
// };
export const onlyNumber = (e: any) => {
    return (e.target.value = e?.target?.value?.replace(/[^0-9.]/g, "")?.replace(/(\..*?)\..*/g, "$1"));
};

export const getActiveClassFilterBtn = (arg: boolean) =>
    arg ? "bg-blue text-white p-1 rounded" : "bg-white text-blue";
// export const convertToJalali = (time: any) => {
//     const khorshidi = moment(time).format("jYYYY/jMM/jDD");
//     return khorshidi;
// };
// export const getFormNowDate = (time: Date) => moment(time).locale("fa").fromNow();

// export const ConvertToMiladi = (time: any) => {
//     const m = moment(time, "jYYYY/jM/jD");
//     const date = m.format();
//     return date;
// };

export const convertNumToStringJalaliMonth = (arr: []) => {
    const months = [
        "فروردين",
        "ارديبهشت",
        "خرداد",
        "تير",
        "مرداد",
        "شهريور",
        "مهر",
        "آبان",
        "آذر",
        "دي",
        "بهمن",
        "اسفند",
    ];
    const newMonth = arr?.map((a: number) => months[a - 1]);
    return newMonth;
};
