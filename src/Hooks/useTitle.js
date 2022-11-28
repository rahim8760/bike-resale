import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Bike Resale`;
    }, [title])
};

export default useTitle;