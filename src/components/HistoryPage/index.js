import { useState } from "react";

import Menu from "../Menu";
import Top from "../Top";
import { Container, StyledCalendar } from "./style";

function HistoryPage () {
    const [value, setValue] = useState(new Date());
    
    function onChange(nextValue) {
    setValue(nextValue);
    }

    return (
        <>
            <Top/>
            <Container>
                <h1>Histórico</h1>
                <StyledCalendar
                    onChange={onChange}
                    value={value}
                    calendarType="US"
                    locale="pt-BR"
                />
            </Container>
            <Menu/>
        </>
    )
}

export default HistoryPage;