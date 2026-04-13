function getImageUrl(person) {
    return `https://i.imgur.com/${person.imageId}s.jpg`;
  }
  
  function Avatar({ person, size }) {
    return (
      <img
        className="rounded-circle shadow-lg img-fluid transition"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
        style={{ transition: "transform 0.3s ease" }}
        onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
        onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
      />
    );
  }
  export default function Props() {
    return (
      <div>
  
  
        {/* HERO */}
        <div className="container py-5">
  <h2 className="text-center mb-5 fw-bold">Científicos Destacados</h2>
  <p className="text-center text-muted mb-5 mx-auto" style={{ maxWidth: "700px" }}>
    Esta sección demuestra el uso de <strong>props en React</strong>.
    Cada componente Avatar recibe información desde el componente padre,
    permitiendo reutilizar el mismo diseño con distintos datos.
    Esto facilita la organización del código y mejora la escalabilidad del proyecto.
  </p>

  <div className="row justify-content-center g-4">

    <div className="col-md-4 text-center">
      <div className="p-4 shadow rounded bg-light"
           style={{
             transition: "all 0.5s ease",
             animation: "fadeInUp 1s"
           }}>
        <Avatar size={120} person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2' }} />
        <h5 className="mt-3">Katsuko Saruhashi</h5>
      </div>
    </div>

    <div className="col-md-4 text-center">
      <div className="p-4 shadow rounded bg-light"
           style={{
             transition: "all 0.7s ease",
             animation: "fadeInUp 1.3s"
           }}>
        <Avatar size={120} person={{ name: 'Aklilu Lemma', imageId: 'OKS67lh' }} />
        <h5 className="mt-3">Aklilu Lemma</h5>
      </div>
    </div>

    <div className="col-md-4 text-center">
      <div className="p-4 shadow rounded bg-light"
           style={{
             transition: "all 0.9s ease",
             animation: "fadeInUp 1.6s"
           }}>
        <Avatar size={120} person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }} />
        <h5 className="mt-3">Lin Lanying</h5>
      </div>
    </div>

  </div>
</div>
      </div>
    );
  }