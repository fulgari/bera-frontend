import React, { useCallback, useState, useEffect } from 'react'
import beraLogo from '../../assets/bera.jpg'
import { useAppSelector, useAppDispatch } from '../../store'
import { toggleDarkMode } from '../../slice/MainSlice'

const storage = typeof window !== 'undefined' ? localStorage : { theme: null }

interface BasicLayoutProps {
  children?: any
}
export default function Basic (props: BasicLayoutProps) {
  const { children } = props
  const [isOpenNotch, setIsOpenNotch] = useState(false)
  const isDarkMode = useAppSelector((state) => state.main.isDarkMode)
  const dispatch = useAppDispatch()

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (storage.theme === 'dark' || (!('theme' in storage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const toggleDark = () => {
    if (isDarkMode) {
      // Whenever the user explicitly chooses light mode
      storage.theme = 'light'
      dispatch(toggleDarkMode(false))
    } else {
      // Whenever the user explicitly chooses dark mode
      storage.theme = 'dark'
      dispatch(toggleDarkMode(true))
    }
  }

  const renderNotchIcons = () => {
    const icons = {
      LIGHT: '☀︎',
      DARK: '☾'
    }
    return <>
      <div className="w-5 h-5 cursor-default" onClick={toggleDark}>{isDarkMode ? icons.LIGHT : icons.DARK}</div>
    </>
  }

  return (
    <div className={'min-h-screen h-screen max-h-screen box-border'}>
      <div className={`fixed left-1/2 top-0 ${isOpenNotch ? 'w-40 h-10' : 'w-16 h-8'} -translate-x-1/2 bg-white rounded-bl-lg rounded-br-lg border-slate-400 border-t-0 drop-shadow-lg z-[1] transition-all flex justify-center items-center`}
        onMouseEnter={() => { setIsOpenNotch(true) }}
        onMouseLeave={() => { setIsOpenNotch(false) }}>
        {isOpenNotch
          ? <div className={'flex justify-center items-center w-full'}>
            {renderNotchIcons()}
          </div>
          : <div className={'flex justify-center items-center pointer-events-none'}>
            <img className="h-5 w-11" src={beraLogo} alt="logo" />
          </div>}
      </div>
      <div className={'flex flex-col items-center justify-center w-full h-full overflow-auto relative'}>
        {children}
      </div>
    </div>
  )
}
