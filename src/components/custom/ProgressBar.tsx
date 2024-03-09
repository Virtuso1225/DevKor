import { Progress } from '@/components/ui/progress'
import { memo } from 'react'
interface ProgressBarProps {
  progress: number
}
const ProgressBar = memo(({ progress }: ProgressBarProps) => {
  console.log('rerennder progress bar')
  return (
    <div className="flex flex-row w-[393px] justify-center items-center gap-[20px]">
      <Progress value={progress} className="flex" />
      <p className="text-[15px] font-semibold	">{progress}%</p>
    </div>
  )
})

export default ProgressBar
