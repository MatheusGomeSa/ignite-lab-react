import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Lessons } from "../components/Lessons";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
    const { slug } = useParams<{ slug: string }>()
    console.log(slug);
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                {slug ?
                    <Video lessonSlug={slug} />
                    :
                    <div className="flex-1" />
                }
                <Sidebar />
            </main>
        </div>
    )
}