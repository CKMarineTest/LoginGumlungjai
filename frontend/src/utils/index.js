export const formatDate = (input) => {
    const rawDate = new Date(input);

    let year = rawDate.getFullYear();
    let month = rawDate.getMonth();
    let day = rawDate.getDate();

    if (year > 2500)
    {
        year -= 543;
    }

        const date = new Date(year, month, day);

    if (isNaN(date)) {
        return "";
    }

    const formattedDay = date.getDate();
    const formattedMonth = new Intl.DateTimeFormat("th-TH", { month: "long" }).format(date);
    const formattedYear = date.getFullYear() + 543;

    return `${formattedDay} ${formattedMonth} ${formattedYear}`;
}

export const PrintData = (router, idCard) => {
    if(idCard) {
        router.push({ name: "pdfbyid", params: { idcard: idCard } });
    }else {
        console.error("Id card is missing")
    }
}