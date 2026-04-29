import { useEffect, useState } from "react"

export default function StickyTabs() {
  const [showTabs, setShowTabs] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowTabs(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  if (!showTabs) return null

  return (
    <div className="sticky top-0 z-40 bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto flex gap-6 px-6 py-4">
        <button>Foto</button>
        <button>Fasilitas</button>
        <button>Ulasan</button>
        <button>Lokasi</button>
      </div>
    </div>
  )
}