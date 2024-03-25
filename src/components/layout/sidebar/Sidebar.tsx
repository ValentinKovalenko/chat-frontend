'use client'

import cn from 'clsx';
import Image from "next/image";
import {Sun} from "lucide-react";
import styles from './Sidebar.module.scss'
import Link from "next/link";
import {MENU} from "@/components/layout/sidebar/sidebar.data";
import {usePathname} from "next/navigation";

export const Sidebar = () => {
  const pathname = usePathname()
  const isShow = pathname === '/login' || pathname === '/register'

  return (
    !isShow ? <aside className={styles.sidebar}>
      <Image src='/logo.svg' priority alt='' width={45} height={45}/>
      <div>
        {MENU.map(item => (
          <Link href={item.url} key={item.url} className={cn({[styles.active]: pathname === item.url})}>
            <item.icon size={27}/>
          </Link>
        ))}
      </div>
      <Sun size={27}/>
    </aside> : null
  );
};
