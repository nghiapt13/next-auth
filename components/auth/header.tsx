import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import Image from "next/image";

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"]
});

interface HeaderProps {
    label: string;
}

export const Header = ({
    label
}: HeaderProps) => {
    return (
        <div className="w-full flex flex-col gap-y-4 items-center justify-center">
            <span className="flex flex-row">
                <Image
                    src="/2020-Btec.png"
                    height="100"
                    width="100"
                    alt="BTEC"
                    className="h-full w-[95px]"
                />
                
                <Image
                    src="/Pearson_logo.png"
                    height="100"
                    width="150"
                    alt="BTEC"
                    className="h-full w-[145px]"
                />
            </span>

            {/* <h1 className={cn("text-3xl font-semibold", font.className)}>
                🔐 Auth
            </h1> */}
            <p className="text-muted-foreground text-sm">
                {label}
            </p>
        </div>
    )
}