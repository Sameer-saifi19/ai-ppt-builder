import { Button } from '@/components/ui/button'
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { Project } from '@prisma/client'
import { JsonValue } from '@prisma/client/runtime/library'
import { useRouter } from 'next/router'
import React from 'react'
import { toast } from 'sonner'

type Props = {
    recentProjects: Project[]
}

const RecentOpen = ({ recentProjects }: Props) => {

    const router = useRouter()

    const handleClick = (projectId: string, slides: JsonValue) => {

        if (!projectId || !slides) {
            toast.error('Project not found', {
                description: "please try again",
                style: { backgroundColor: 'grey' }
            })
            return
        }

        setSlides(JSON.parse(JSON.stringify(slides)))
        router.push(`/presentation/${projectId}`)
    }
    return (
        recentProjects.length > 0 ? (<SidebarGroup>
            <SidebarGroupLabel>
                Recently Opened
            </SidebarGroupLabel>
            <SidebarMenu>
                {recentProjects.length > 0 ? (recentProjects.map((item, idx) => (
                    <SidebarMenuItem key={item.id}>
                        <SidebarMenuButton asChild tooltip={item.title} className={`hover:bg-primary-80`}>
                            <Button variant={'link'}
                                onClick={() => handleClick(item.id, item.slides)}

                                className={`text-xs items-center justify-start`}
                            >
                                <span>{item.title}</span>
                            </Button>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))) : ''}
            </SidebarMenu>
        </SidebarGroup>) : (
            <Button variant={'link'}
                onClick={() => handleClick('adssadf', '[]')}
            >asdasd</Button>
        )
    )
}

export default RecentOpen