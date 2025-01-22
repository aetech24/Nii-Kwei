import { BsCheckCircle } from "react-icons/bs"


export default function ConfirmationPage({
  amount = 100,
  donor = "",
  transactionId = "",
  date = new Date().toLocaleDateString(),
}) {
  return (
    <div className="max-w-2xl mx-auto p-6 border rounded-md my-10 shadow-md">
      <div className="p-8">
        <div className="flex flex-col items-center space-y-4">
          <BsCheckCircle className="w-16 h-16 text-purple-500" />
          <h1 className="text-2xl font-bold text-purple-500 text-center">Thank You for Your Donation!</h1>
          <p className="text-gray-600 text-center mb-6">Your generous contribution will help us make a difference.</p>

          <div className="w-full space-y-4 bg-gray-50 p-3 rounded-md">
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Amount:</span>
              <span className="font-medium">${amount}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Donor:</span>
              <span className="font-medium">{donor}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Transaction ID:</span>
              <span className="font-medium">{transactionId}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Date:</span>
              <span className="font-medium">{date}</span>
            </div>
          </div>

          <div className="w-full space-y-3 mt-6 flex flex-col gap-2">
            <button className="w-full py-2 border rounded-md" onClick={() => window.print()}>
              Download Receipt
            </button>
            <button className="w-full py-2 border rounded-md">
              Share Your Support
            </button>
            <button className="w-full text-white py-2 border rounded-md bg-teal-600 hover:bg-teal-700" onClick={() => (window.location.href = "/")}>
              Return to Homepage
            </button>
          </div>
          <p className="my-2 text-center">Your donation to Nii Kwei Ministries is tax-deductible. Please save your receipt for tax purposes.</p>
        </div>
      </div>
    </div>
  )
}

