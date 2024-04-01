type Props = {
    rate: number;
}

export const EmojiRating = ({rate}: Props) => {

    if (rate > 5) rate = 5;
    if (rate < 0) rate = 0;

    const rateInt = Math.floor(rate);
    const stars = '❤️'.repeat(rateInt) + '🤍'.repeat(5 - rateInt)


    return(
        <div className="flex text-4xl items-center">
            <div className="bg-gray-700 p-2 rounded-lg">{rate}</div>
            <div className="ml-3">{stars}</div>
        </div>
    )
}