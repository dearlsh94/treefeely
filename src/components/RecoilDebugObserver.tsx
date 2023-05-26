import { useRecoilSnapshot } from 'recoil'
import { useEffect } from 'react'

const RecoilDebugObserver = () => {
  const isProduction = process.env.ENV === 'production'
  const snapshot = useRecoilSnapshot()
  useEffect(() => {
    if (!isProduction) {
      Array.from(snapshot.getNodes_UNSTABLE({ isModified: true })).forEach(node => {
        console.log(`modifed [${node.key}]`, snapshot.getLoadable(node))
      })
    }
  }, [snapshot, isProduction])
  const handleAllSnapshot = () => {
    Array.from(snapshot.getNodes_UNSTABLE()).forEach(node => {
      console.log(node.key, snapshot.getLoadable(node))
    })
  }
  return (
    <>
      {!isProduction && (
        <div className="recoil-debug-box">
          <button onClick={handleAllSnapshot}>Snapshot</button>
        </div>
      )}
    </>
  )
}

export default RecoilDebugObserver
