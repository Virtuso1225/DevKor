import { memo } from 'react'
import { Progress } from '@/components/ui/progress'
interface ProgressBarProps {
  progress: number
}
const ProgressBar = memo(({ progress }: ProgressBarProps) => {
  return (
    <div className="flex flex-row w-[393px] justify-center items-center gap-[20px]">
      <Progress value={progress} className="flex" />
      <p className="text-[15px] font-semibold	">{progress}%</p>
    </div>
  )
})

export default ProgressBar
