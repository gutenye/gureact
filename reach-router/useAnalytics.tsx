import { useEffect } from 'react'
import GA from 'react-ga'
import { useLocation } from '@reach/router'

GA.initialize(process.env.REACT_APP_GA_ID)

const useAnalytics = () => {
  const pathname = useLocation().pathname
  useEffect(() => {
    console.log(':: ~ useEffect ~ pathname', pathname)
    GA.pageview(pathname)
  }, [pathname])
}

export default useAnalytics
