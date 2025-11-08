// "use client"

// import type React from "react"
// import { useState } from "react"
// import type { RegistrationData } from "@/app/page"

// // Define the type for the form data managed by the parent
// type FormData = {
//   name: string
//   dob: string
//   occupation: string
//   mobile: string
//   email: string
// }

// interface RegistrationPageProps {
//   city: string
//   onSubmit: (data: RegistrationData) => void
//   onViewTerms: () => void
//   // Add props for lifted state
//   formData: FormData
//   setFormData: React.Dispatch<React.SetStateAction<FormData>>
//   termsAccepted: boolean
//   setTermsAccepted: React.Dispatch<React.SetStateAction<boolean>>
// }

// export default function RegistrationPage({
//   city,
//   onSubmit,
//   onViewTerms,
//   formData,
//   setFormData,
//   termsAccepted,
//   setTermsAccepted,
// }: RegistrationPageProps) {
//   // Remove local useState for formData and termsAccepted
//   const [errors, setErrors] = useState<Record<string, string>>({})

//   const validateForm = () => {
//     const newErrors: Record<string, string> = {}
//     if (!formData.name.trim()) newErrors.name = "Full name is required"
//     if (!formData.dob) newErrors.dob = "Date of birth is required"
//     if (!formData.occupation.trim()) newErrors.occupation = "Occupation is required"
//     if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required"
//     if (!formData.email.trim()) newErrors.email = "Email is required"
//     if (!termsAccepted) newErrors.terms = "You must accept Terms & Conditions"
//     return newErrors
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     const newErrors = validateForm()
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors)
//       return
//     }
//     onSubmit({ ...formData, city })
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target
//     // Use the setFormData prop
//     setFormData((prev) => ({ ...prev, [name]: value }))
//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: "" }))
//     }
//   }

//   return (
//     <div className="min-h-screen bg-black text-white overflow-hidden">

//       {/* Hero Section */}
//       <img
//         src={`/cover/${city.toLowerCase()}.png`} // Changed to dynamic src
//         alt="Drum Tao"
//         className="w-full h-auto max-h-64 object-cover"
//       />

//       {/* Registration Form */}
//       <div className="max-w-2xl mx-auto px-4 py-8">
//         <h1 className="text-2xl font-bold text-center mb-8 text-pretty">Let's Get You Started</h1>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Full Name */}
//           <div>
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               value={formData.name} // Value from prop
//               onChange={handleChange}
//               className="w-full bg-gray-800 border px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
//             />
//             {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//           </div>

//           {/* Date of Birth */}
//           <div>
//             <input
//               type="date"
//               name="dob"
//               value={formData.dob} // Value from prop
//               onChange={handleChange}
//               className="w-full bg-gray-800 border px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
//             />
//             {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob}</p>}
//           </div>

//           {/* Occupation */}
//           <div>
//             <input
//               type="text"
//               name="occupation"
//               placeholder="Occupation"
//               value={formData.occupation} // Value from prop
//               onChange={handleChange}
//               className="w-full bg-gray-800 border px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
//             />
//             {errors.occupation && <p className="text-red-500 text-sm mt-1">{errors.occupation}</p>}
//           </div>

//           {/* Mobile Number */}
//           <div>
//             <input
//               type="tel"
//               name="mobile"
//               placeholder="Mobile Number"
//               value={formData.mobile} // Value from prop
//               onChange={handleChange}
//               className="w-full bg-gray-800 border px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
//             />
//             {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
//           </div>

//           {/* Email Address */}
//           <div>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               value={formData.email} // Value from prop
//               onChange={handleChange}
//               className="w-full bg-gray-800 border px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
//             />
//             {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//           </div>

//           {/* Terms & Conditions Checkbox */}
//           <div className="flex items-start gap-3 mb-6">
//             <input
//               type="checkbox"
//               id="terms"
//               checked={termsAccepted} // Value from prop
//               onChange={(e) => {
//                 setTermsAccepted(e.target.checked) // Use setTermsAccepted prop
//                 if (errors.terms) {
//                   setErrors((prev) => ({ ...prev, terms: "" }))
//                 }
//               }}
//               className="mt-1 w-5 h-5 accent-red-600 cursor-pointer"
//             />
//             <label htmlFor="terms" className="cursor-pointer">
//               <button type="button" onClick={onViewTerms} className="text-red-600 hover:text-red-500 text-sm underline">
//                 Terms & Conditions
//               </button>
//             </label>
//           </div>
//           {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-red-600 text-white py-4 font-bold text-lg hover:bg-red-700 transition-colors"
//           >
//             SUBMIT
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }
// Toyota/components/registration-page.tsx
"use client"

import type React from "react"
import { useState } from "react"
import type { RegistrationData } from "@/app/page"

// Define the type for the form data managed by the parent
type FormData = {
  name: string
  dob: string
  occupation: string
  mobile: string
  email: string
  car_model: string 
}

interface RegistrationPageProps {
  city: string
  // --- FIX: Update the 'onSubmit' prop type ---
  onSubmit: (data: Omit<RegistrationData, "uid">) => void;
  onViewTerms: () => void
  // Add props for lifted state
  formData: FormData
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
  termsAccepted: boolean
  setTermsAccepted: React.Dispatch<React.SetStateAction<boolean>>
  isLoading: boolean // Add loading prop
}

export default function RegistrationPage({
  city,
  onSubmit,
  onViewTerms,
  formData,
  setFormData,
  termsAccepted,
  setTermsAccepted,
  isLoading, // Destructure loading prop
}: RegistrationPageProps) {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = "Full name is required"
    if (!formData.dob) newErrors.dob = "Date of birth is required"
    if (!formData.occupation.trim()) newErrors.occupation = "Occupation is required"
    if (!formData.mobile.trim() || !/^\d{10}$/.test(formData.mobile)) newErrors.mobile = "Valid 10-digit mobile number is required"
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email is required"
    if (!termsAccepted) newErrors.terms = "You must accept Terms & Conditions"
    return newErrors
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isLoading) return // Prevent multiple submissions
    
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    // onSubmit now just passes the data up
    // This object ({ ...formData, city }) correctly matches Omit<RegistrationData, "uid">
    onSubmit({ ...formData, city })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    // Use the setFormData prop
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* Hero Section */}
      <img
        src={`/cover/${city.toLowerCase()}.png`} // Dynamic src
        alt="Drum Tao"
        className="w-full h-auto max-h-64 object-cover"
      />

      {/* Registration Form */}
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center mb-8 text-pretty">Let's Get You Started</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* ... (input fields remain the same, using props for value/onChange) ... */}
          {/* Full Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name} // Value from prop
              onChange={handleChange}
              className="w-full bg-gray-800 border px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Date of Birth */}
          <div>
            <input
              type="date"
              name="dob"
              value={formData.dob} // Value from prop
              onChange={handleChange}
              className="w-full bg-gray-800 border px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
            />
            {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob}</p>}
          </div>

          {/* Occupation */}
          <div>
            <input
              type="text"
              name="occupation"
              placeholder="Occupation"
              value={formData.occupation} // Value from prop
              onChange={handleChange}
              className="w-full bg-gray-800 border px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
            />
            {errors.occupation && <p className="text-red-500 text-sm mt-1">{errors.occupation}</p>}
          </div>

          {/* Mobile Number */}
          <div>
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile} // Value from prop
              onChange={handleChange}
              className="w-full bg-gray-800 border px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
            />
            {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
          </div>

          {/* Email Address */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email} // Value from prop
              onChange={handleChange}
              className="w-full bg-gray-800 border px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Car Model */}
          <div>
            <input
              type="text"
              name="car_model"
              placeholder="Current car/Your own car / Family"
              value={formData.car_model} // 🆕 Controlled input
              onChange={handleChange}
              className="w-full bg-gray-800 border px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Terms & Conditions Checkbox */}
          <div className="flex items-start gap-3 mb-6">
            <input
              type="checkbox"
              id="terms"
              checked={termsAccepted} // Value from prop
              onChange={(e) => {
                setTermsAccepted(e.target.checked) // Use setTermsAccepted prop
                if (errors.terms) {
                  setErrors((prev) => ({ ...prev, terms: "" }))
                }
              }}
              className="mt-1 w-5 h-5 accent-red-600 cursor-pointer"
            />
            <label htmlFor="terms" className="cursor-pointer">
              <button type="button" onClick={onViewTerms} className="text-red-600 hover:text-red-500 text-sm underline">
                Terms & Conditions
              </button>
            </label>
          </div>
          {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading} // Disable button when loading
            className="w-full bg-red-600 text-white py-4 font-bold text-lg hover:bg-red-700 transition-colors disabled:bg-gray-500"
          >
            {isLoading ? "Submitting..." : "SUBMIT"}
          </button>
        </form>
      </div>
    </div>
  )
}