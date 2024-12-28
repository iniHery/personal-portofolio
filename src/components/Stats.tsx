export default function Stats() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-500">80+</div>
            <div className="text-gray-600 mt-2">Satisfied clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-500">200+</div>
            <div className="text-gray-600 mt-2">Projects completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-500">99+</div>
            <div className="text-gray-600 mt-2">Reviews given</div>
          </div>
        </div>
      </div>
    </section>
  );
}
