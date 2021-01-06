import mathPic from "../images/math.webp";
import classicalMechanicsPic from "../images/classicalmechanics.jpeg";
import electrodynamicsPic from "../images/electrodynamics.jpeg";
import quantumPic from "../images/quantum.jpeg";
import particlePic from "../images/particle.jpeg";
import thermodynamicsPic from "../images/thermodynamics.webp";
import blackholePic from "../images/blackhole.webp";

const Home = () => {
  return (
    <div>
      <div className="pt-5 row">
        <h1 className="m-4">
          My book recomendations for studying physics on undergraduate level
        </h1>
        <div className="col-4 mt-5">
          <img
            className="m-2"
            src={mathPic}
            alt="math on blackboard"
            width="100%"
          />
        </div>
        <div className="col-6 mt-5">
          <h2>Prerequisites</h2>
          <p>
            You need to know physics on the secondary school level well. You
            also need to know your math well on secondary school level. You need
            to know calculus of one and multi variable functions to start
            learning from these books. It is also beneficial to watch
            experimental physics lessons at least online like
            <a
              className="pl-1"
              href="https://www.youtube.com/channel/UCiEHVhv0SBMpP75JbzJShqw"
            >
              Walter Lewin's lectures
            </a>
            .
          </p>
          <h2>Mathematical Methodes in the Physiscal Sciences</h2>
          <p>
            This is the classic book, which explains everything on as elementary
            way as possible. It contains lots of problems to provide you all the
            experience with the math you need to study physics as an
            undergraduate. You need to solve these problems to absorb the
            material. This is true for the other books too. There is no shortcut
            here even if you feel the amount of practice overwhelming. You will
            just need all this math to cope with the rest.
          </p>
          <h2>The Feynman Lectures on Physics</h2>
          <p>
            This is a beautifully written book, which is very entertaining read.
            This book is far from popscience, although it's as friendly as
            possible on the math.Feynman uses the bear minimum math to explain
            whatever he wants to tell you about physics, and he has a lot to
            tell you. The book is full of Feynman's own way to explain things,
            so you won't always get the typical explanation. The way how Feynman
            explains sometimes very difficult things looks very simple and
            understandable. But don't be a fool. Don't think this book will make
            you a person like Feynman even if you had the capabilities. The book
            only shows you how Feynman was able to understand physics after
            wondering about it a lot. He also must have solved a lot of
            problems, much more than he has in this book. This book is the one,
            which you will love the most and entertains you instead of teaching.
            This is the best possible motivation you can get. You will need
            every drop of that for the rest of the books, because those will
            teach you.
          </p>
        </div>
        <div className="col-2 mt-5"></div>
      </div>
      <div className="row">
        <div className="col-4">
          <img
            className="m-2"
            src={classicalMechanicsPic}
            alt="the Earth and the Moon in space"
            width="100%"
          />
        </div>
        <div className="col-6">
          <h2>Classical Mechanics</h2>
          <p>
            Taylor's book is a pedagogical masterpiece. It will introduce you
            Classical mechanics on the way you should know it for your future
            studies. It won't teach you too much just what you absolutely need,
            but it does a brilliant job. The book is long and verbose and it
            contains a lot of problems to solve. These are almost always very
            doable and useful. It even gives you enough computer problems to
            learn basic computer programming for scientific applications. You
            shouldn't miss this opportunity. The verbosity in this case comes
            with very high level of clarity. This book will teach you classical
            mechanics even if you are a weaker student, who is willing to learn
            like me. We must admit the process can be overwhelming, but Taylor
            not only teaches you classical mechanics. He also makes you practice
            your math on a basic level, and he knows what you will need for your
            further studies. The read is not difficult, but it is not
            entertaining too much. Everything is very clearly explained from
            more dirrections usually. The explanations are the standard ones,
            Taylor is not like Feynman. The book is extremly useful and a bit
            boring, especially compared to Feynman's book.
          </p>
        </div>
        <div className="col-2 mt-5"></div>
      </div>
      <div className="row">
        <div className="col-4">
          <img
            className="m-2"
            src={electrodynamicsPic}
            alt="electrical discharge on the coil of a Tesla-transformer"
            width="100%"
          />
        </div>
        <div className="col-6">
          <h3>Introduction to Electrodynamics</h3>
          <p>
            This book is to electrodynamics than Taylor is to classical
            mechanics. The subject is mature and not very entertaining on this
            level, but Griffiths style makes it as enjoyable as possible. He has
            even fine humour, which can make you laugh at some points. Don't be
            misled. This book doesn't want to entertain you. This will take your
            hand and teach you how to do electrodynamics. The material is very
            conventional. The book also make you practice the necessary math. It
            is not enough to read it. You have to do the problems too. These are
            doable problems.
          </p>
        </div>
        <div className="col-2 mt-5"></div>
      </div>
      <div className="row">
        <div className="col-4">
          <img
            className="m-2"
            src={quantumPic}
            alt="quantum corral made by STM"
            width="100%"
          />
        </div>
        <div className="col-6">
          <h3>Introduction to Quantum Mechanics</h3>
          <p>
            The laws of nature on the atomic level are not the laws of classical
            mechanics, but quantum mechanics. These are pretty
            counter-intuitive. All of our intuition comes from macroscopic
            experience and we luck of any intuition on the atomic level. The
            math is fairly simple, which is a surprise. This book is the most
            readable account of the subject on undergraduate level. This will
            teach you the math and how to do quantum mechanics. The book doesn't
            have anything about the hystory of the subject or the experimental
            facts, which led to quantum mechanics. It won't force the Dirac
            bra-ket notation, it simply teaches you how to apply the Schrodinger
            equation. We call this aproach wave mechanics, this is how QM is
            still applied today in theoretical chemistry, but not the full
            story. The book on the other hand won't hide away the philosophical
            difficulties of the interpretation of the math.
          </p>
        </div>
        <div className="col-2 mt-5"></div>
      </div>
      <div className="row">
        <div className="col-4">
          <img
            className="m-2"
            src={particlePic}
            alt="inside the tunnel of LHC"
            width="100%"
          />
        </div>
        <div className="col-6">
          <h3>Introduction to Elementary Particles</h3>
          <p>
            If you are interested in the laws of quantum mechanics on the
            subatomic level this is the best introductory book to read. You will
            need the material from Griffiths QM book to understand this book.It
            will teach you Feynman-diagrams but it's not a quantum field theory
            book, so don't expect it to reveal how the Feynman-rules come out
            from basic principles. It's really just an introduction instead of
            the full story.
          </p>
          <h3>Student Friendly Quantum Field Theory</h3>
          <p>
            I can say this is the only book, which can be recommended to you on
            the undergraduate level to study quantum field theory. The book will
            teach you this, but only deals with the theory of the
            electromagnetic interaction. This is called quantum electrodynamics.
            The subject is notoriously difficult and it's typically tought on
            graduate level. We can say it's 5 year postgraduate study to learn
            this. This book is obviously can not be the final word, but it is
            the best place to start your studies. The calculations are detailed
            and as a bonus the solution book is available to the problems in the
            book. It's great for self study.
          </p>
        </div>
        <div className="col-2 mt-5"></div>
      </div>
      <div className="row">
        <div className="col-4">
          <img
            className="m-2"
            src={thermodynamicsPic}
            alt="match is getting flamed"
            width="100%"
          />
        </div>
        <div className="col-6">
          <h3>Fundamentals of Statistical and Thermal Physics</h3>
          <p>
            This is the book to learn how the laws of classical and quantum
            mechanics can be applied to systems, which contain a huge number of
            particles. In theory if you knew the state of all the particles now
            you could callculate the state of the system in any later time
            according to the laws of quantum mechanics. The problem with this
            aproach is that in practice it's not working because of the large
            number of particles. You need other assumptions and methodes to
            successfully handle this problem. The assumptions, what you need to
            take, could not be justified mathematically until now, only the
            success of the theory justify them. The theory accurately describes
            the experiments. There is a more serious concern against this
            theory. We call it the reversibility paradox. The laws of physics
            are symmetric for the time reversion. It means that every natural
            process should be able to go backwards in time according to the laws
            of physics. So if you film a natural process and play the film
            backwards, the process what you see, should not be against the laws
            of physics. If the film shows a process in a system, which contains
            a huge amount of particles, you never experience the reversed
            process in nature, which you can see on the film played backwards.
            Why is this, if this reversed process is not against the laws of
            physics?
          </p>
        </div>
        <div className="col-2 mt-5"></div>
      </div>
      <div className="row">
        <div className="col-4">
          <img
            className="m-2"
            src={blackholePic}
            alt="black hole visualisations"
            width="100%"
          />
        </div>
        <div className="col-6">
          <h3>Relativity, Gravitation and Cosmology</h3>
          <p>
            Quantum mechanics is difficult, because our intuition is far from
            the atomic world. The theory of gravity is difficult, because it's
            geometry. The differential geometry, which has been used by Einstein
            to express the theory is difficult to learn, so this theory is
            hardly ever thought on the undergraduate level. If you want to get a
            first aquintance with Einstein's theory, this is the book to read.
            It doesn't contain enough excercises to teach you the theory, but
            the best first resource on undergraduate level.
          </p>
        </div>
        <div className="col-2 mt-5"></div>
      </div>
    </div>
  );
};

export default Home;
