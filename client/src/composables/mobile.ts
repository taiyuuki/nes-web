const useMobile = () => {
    const isMobile = ref(true)
    const handle = () => {
        const width = window.innerWidth
        if (!isMobile.value && width < 768) {
            isMobile.value = true
        }
        else if (isMobile.value && width >= 768) {
            isMobile.value = false
        }
    }
    onMounted(() => {
        handle()
        window.addEventListener('resize', handle)
    })
    onUnmounted(() => {
        window.removeEventListener('resize', handle)
    })
    return isMobile
}

export { useMobile }
