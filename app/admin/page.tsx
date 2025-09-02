"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { Lock, Unlock, Sparkles, Home } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function AdminPage() {
  const [password, setPassword] = useState("")
  const [isAdmin, setIsAdmin] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123"

  useEffect(() => {
    const adminStatus = localStorage.getItem("isAdmin")
    setIsAdmin(adminStatus === "true")
  }, [])

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("isAdmin", "true")
      setIsAdmin(true)
      setError("")
      setPassword("")
    } else {
      setError("Hatalı şifre!")
    }
  }

  const handleLogout = () => {
    localStorage.setItem("isAdmin", "false")
    setIsAdmin(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F2EDD1] via-[#F9CB99] to-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-[#F2EDD1] to-[#F9CB99] backdrop-blur-sm border-b border-[#BCA88D]/30">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#BCA88D] to-[#8B7355] rounded-full flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-[#BCA88D] to-[#8B7355] bg-clip-text text-transparent">Solara Event</span>
        </Link>
        <Link href="/" className="text-gray-700 hover:text-[#BCA88D] transition-colors flex items-center gap-2">
          <Home className="w-4 h-4" />
          Ana Sayfa
        </Link>
      </nav>

      <div className="max-w-md mx-auto px-6 py-12">
        <AnimatedSection>
          <Card className="border-[#BCA88D]/30 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-[#F2EDD1] to-[#F9CB99]">
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-[#BCA88D] to-[#8B7355] bg-clip-text text-transparent flex items-center gap-2"
                <Lock className="w-6 h-6" />
                Yönetici Paneli
              </CardTitle>
              <CardDescription>
                Site içeriğini düzenlemek için giriş yapın
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              {!isAdmin ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Yönetici Şifresi
                    </label>
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleLogin()}
                      placeholder="Şifrenizi girin"
                      className="border-[#F2EDD1] focus:border-[#BCA88D]"
                    />
                    {error && (
                      <p className="text-red-500 text-sm mt-2">{error}</p>
                    )}
                  </div>
                  <Button
                    onClick={handleLogin}
                    className="w-full bg-gradient-to-r from-[#BCA88D] to-[#8B7355] hover:from-[#8B7355] hover:to-[#6B5B47] text-white"
                  >
                    <Unlock className="w-4 h-4 mr-2" />
                    Giriş Yap
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-700 font-medium">
                      Yönetici olarak giriş yaptınız!
                    </p>
                    <p className="text-green-600 text-sm mt-1">
                      Artık site içeriğini düzenleyebilirsiniz.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-medium text-gray-700">Düzenlenebilir Sayfalar:</h3>
                    <div className="space-y-2">
                      <Link
                        href="/hakkinda"
                        className="block w-full text-left px-4 py-2 bg-[#F2EDD1] hover:bg-[#F9CB99] rounded-lg transition-colors text-[#BCA88D]"
                      >
                        → Hakkında Sayfası
                      </Link>
                    </div>
                  </div>

                  <Button
                    onClick={handleLogout}
                    variant="outline"
                    className="w-full border-red-200 hover:bg-red-50 text-red-600"
                  >
                    <Lock className="w-4 h-4 mr-2" />
                    Çıkış Yap
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

        </AnimatedSection>
      </div>
    </div>
  )
}