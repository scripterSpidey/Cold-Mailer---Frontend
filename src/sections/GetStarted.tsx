import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type GetStartedProps = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const GetStarted = ({ open, setOpen }: GetStartedProps) => {

    const [authMode, setAuthMode] = useState('login');
    const panelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e:MouseEvent) => {
            if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
                setOpen(false)
            }
        }
        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside)
            }
        }
    }, [open, setOpen]);

    return (
        <div
            className={`fixed top-0  right-0 h-full w-full md:w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out 
                ${open ? 'translate-x-0' : 'translate-x-full'}`}
            ref={panelRef}>
            <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-2xl w-full font-bold text-center text-indigo-800">
                    Sign In | Sign Up
                </h2>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setOpen(false)}
                >
                    <X className="h-6 w-6" />
                </Button>
            </div>
            <div className="flex p-4 gap-2 border-b">
                <Button
                    variant={authMode === 'login' ? 'default' : 'outline'}
                    className={`flex-1 ${authMode === 'login' ? 'bg-indigo-800 hover:bg-indigo-950' : ''}`}
                    onClick={() => setAuthMode('login')}
                >
                    Sign In
                </Button>
                <Button
                    variant={authMode === 'signup' ? 'default' : 'outline'}
                    className={`flex-1 ${authMode === 'signup' ? 'bg-indigo-800 hover:bg-indigo-950' : ''}`}
                    onClick={() => setAuthMode('signup')}
                >
                    Sign Up
                </Button>
            </div>
        </div>

    )
}
export default GetStarted