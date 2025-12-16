import Snowfall from "react-snowfall"

export const Design = () => {
    return(
        <Snowfall
            color="#A9A9A9"
            style={{background:'transparent'}}
            snowflakeCount={200}
            speed={[3.0,5.0]}
            radius={[1.0,3.0]}
        />
    )
}