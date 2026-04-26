import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export const useMountedTheme = () => {
    const { theme, setTheme } = useTheme()
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    return {
        theme: isMounted ? theme : 'light',
        setTheme,
        isMounted
    }
}