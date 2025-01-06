'use client'

import { useState, useEffect } from 'react'

interface ContributionDay {
    date: string
    count: number
    level: 0 | 1 | 2 | 3 | 4
}

interface ContributionData {
    total: {
        [year: string]: number
    }
    contributions: ContributionDay[]
}

export default function GithubContributionGraph() {
    const [contributionData, setContributionData] = useState<ContributionData>()
    const [selectedYear, setSelectedYear] = useState<number>(2024) // Default year to 2024
    const [isLoading, setIsLoading] = useState<boolean>(false) // Loading state

    const getContribution = async (year: number) => {
        setIsLoading(true) // Set loading to true
        try {
            const response = await fetch(`https://github-contributions-api.jogruber.de/v4/Vikas62502?y=${year}`)
            const data = await response.json()
            setContributionData(data)
        } catch (error) {
            console.error('Error fetching contributions:', error)
        } finally {
            setIsLoading(false) // Set loading to false
        }
    }

    useEffect(() => {
        getContribution(selectedYear)
    }, [selectedYear]) // Fetch contributions when year changes

    const getColorClass = (level: number) => {
        switch (level) {
            case 1: return 'bg-[#9B1B30]' // Crimson Dark
            case 2: return 'bg-[#D9004C]' // Crimson Medium
            case 3: return 'bg-[#E40057]' // Crimson
            case 4: return 'bg-[#FF4678]' // Light Crimson
            default: return 'bg-[#2D2D2D]' // Dark Gray
        }
    }

    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const generateGrid = (monthIndex: number) => {
        const firstDayOfMonth = new Date(selectedYear, monthIndex, 1).getDay()
        const daysInMonth = new Date(selectedYear, monthIndex + 1, 0).getDate()

        const totalCells = 42
        const emptyDaysBefore = firstDayOfMonth

        return Array.from({ length: totalCells }, (_, index) => {
            const dayOfMonth = index - emptyDaysBefore + 1
            return dayOfMonth > 0 && dayOfMonth <= daysInMonth ? dayOfMonth : null
        })
    }

    return (
        <div className="w-full max-w-6xl mx-auto p-6 flex">
            <div className="rounded-2xl border border-[#D9004C] p-6 bg-black w-full">
                <h2 className="text-3xl font-bold mb-6 text-[#D9004C]">Github&apos;s Stats</h2>

                {isLoading ? (
                    <div className="text-center text-white">Loading contributions...</div>
                ) : (
                    <div className="relative">
                        {/* Contribution grid */}
                        <div className="grid grid-cols-7 gap-1">
                            {months.map((_, monthIndex) => (
                                <div key={monthIndex} className="space-y-2">
                                    <div className="text-center text-sm text-gray-400">{months[monthIndex]}</div>
                                    <div className="grid grid-cols-7 gap-1">
                                        {generateGrid(monthIndex).map((day, index) => {
                                            const contributionDay = contributionData?.contributions.find(contrib => {
                                                const contribDate = new Date(contrib.date)
                                                return contribDate.getDate() === day && contribDate.getMonth() === monthIndex
                                            })
                                            return (
                                                <div
                                                    key={index}
                                                    className={`w-3 h-3 rounded-sm ${contributionDay ? getColorClass(contributionDay.level) : 'bg-[#2D2D2D]'}`}
                                                    title={day ? (contributionDay ? `${contributionDay.count} contributions on ${formatDate(contributionDay.date)}` : '') : ''}
                                                />
                                            )
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Legend */}
                        <div className="flex items-center justify-end mt-4 text-sm text-gray-400 gap-2">
                            <span>{contributionData?.total[selectedYear.toString()] || 0} contributions in {selectedYear}</span>
                            <div className="flex items-center gap-1 ml-4">
                                <span>Less</span>
                                <div className="w-3 h-3 bg-[#2D2D2D] rounded-sm" />
                                <div className="w-3 h-3 bg-[#9B1B30] rounded-sm" />
                                <div className="w-3 h-3 bg-[#D9004C] rounded-sm" />
                                <div className="w-3 h-3 bg-[#E40057] rounded-sm" />
                                <div className="w-3 h-3 bg-[#FF4678] rounded-sm" />
                                <span>More</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Year Tabs */}
            <div className="flex flex-col space-y-2 ml-6">
                {[2021, 2022, 2023, 2024, 2025].map((year) => (
                    <button
                        key={year}
                        onClick={() => setSelectedYear(year)}
                        className={`px-4 py-2 rounded-lg text-white ${selectedYear === year ? 'bg-[#D9004C]' : 'bg-[#2D2D2D]'} hover:bg-[#9B1B30]`}
                    >
                        {year}
                    </button>
                ))}
            </div>
        </div>
    )
}
