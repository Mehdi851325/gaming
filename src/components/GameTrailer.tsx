import useTrailer from "../hooks/useTrailers";

interface Props{
    gameid: number;
}
const GameTrailer = ({gameid}:Props) => {
const {data, error, isLoading} = useTrailer(gameid)

    if(isLoading) return null;

    if(error) throw error;

  return (
    <video 
    src={data?.results[0]?.data[480]}
    poster={data?.results[0]?.preview}
    controls
    />
  )
}

export default GameTrailer