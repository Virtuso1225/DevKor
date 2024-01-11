import { useLogin } from '@/api/hooks/auth'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { formSchema } from '@/lib/formSchema'
import { isAuthenticated } from '@/recoil/atom'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import type { z } from 'zod'
const LoginPage = () => {
  const isAuth = useRecoilValue(isAuthenticated)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: ''
    }
  })
  const { mutate: loginMutation } = useLogin(form.getValues('username'))

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    loginMutation(data)
  }
  const loaction = useLocation()
  useEffect(() => {
    if (!isAuth && loaction.pathname === '/todo') {
      toast({ variant: 'destructive', title: '로그인이 필요합니다.' })
    }
  }, [])
  return (
    <div className="flex flex-col items-center mt-[40px]">
      <Helmet>
        <title>LoginPage</title>
      </Helmet>
      <Card className="flex flex-col px-[50px] py-[30px]">
        <CardHeader className="flex items-center">
          <CardTitle>로그인</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="username" {...field} />
                    </FormControl>
                    <FormDescription>username을 입력해주세요</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="password" {...field} type="password" />
                    </FormControl>
                    <FormDescription>password를 입력해주세요</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

export default LoginPage
