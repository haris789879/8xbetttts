import React from 'react';
import { Shield, Trophy, Users, Wallet, Clock, Gift, ChevronRight, Globe, Phone, Mail, PlayCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center" style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?ixlib=rb-4.0.3")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold mb-6">8xBet</h1>
          <p className="text-2xl mb-8">8xbet trang hello haris</p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            Start Betting Now
          </button>
        </div>
      </header>

      {/* Xì Tố Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-xl p-8 shadow-2xl">
              <div className="flex items-center mb-6">
                <PlayCircle className="w-10 h-10 text-green-500 mr-4" />
                <h2 className="text-3xl font-bold">
                  <a href="https://8xbetz.dev/" className="hover:text-green-500 transition-colors duration-300">
                    Xì Tố tại 8xBet
                  </a>
                </h2>
              </div>
              <div className="prose prose-lg prose-invert">
                <p className="text-gray-300 leading-relaxed mb-6">
                  Với cách chơi hấp dẫn và đầy thú vị, Xì Tố đang trở thành một siêu phẩm cá cược ngày càng được bet thủ ưa chuộng. Trò chơi này không chỉ mang lại những giây phút giải trí sảng khoái mà còn thử thách kỹ năng và chiến thuật của người chơi. Để hiểu rõ hơn về Xì Tố và cách chơi từ A đến Z hãy theo dõi nội dung bài viết dưới đây. Bạn sẽ được trải nghiệm một cuộc chơi bài đầy kịch tính và hấp dẫn, hiện đang có mặt tại 8xbet, với những phần thưởng giá trị và cơ hội thắng lớn.
                </p>
                
                <h3 className="text-2xl font-semibold mb-4">Sơ lược về Xì Tố trên 8xbet</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Game bài này còn có tên gọi khác là Poker, một tên gọi thuần Anh. Tính đến hiện tại, đây là tựa game bài sở hữu nhiều phiên bản Xì Tố phổ biến nhất trên thế giới. Mặc dù mỗi biến thể có một lối chơi khác nhau, nhưng nhiệm vụ chính của người chơi là đặt cược dựa trên sức mạnh của những lá bài.
                </p>

                <h4 className="text-xl font-semibold mb-4">Về cơ bản, trò chơi được chia thành ba nhóm chính:</h4>
                <div className="space-y-6">
                  <div className="bg-gray-700 p-6 rounded-lg">
                    <h5 className="text-lg font-semibold text-green-400 mb-2">Draw</h5>
                    <p className="text-gray-300">
                      Với nhóm Xì Tố này, người chơi sẽ được chia 5 lá bài hoặc nhiều hơn. Tất cả người chơi đều úp bài xuống và chỉ biết duy nhất bài của mình. Trong một ván game, bạn có quyền trao đổi một hoặc vài lá bài trong một số lần cố định.
                    </p>
                  </div>
                  
                  <div className="bg-gray-700 p-6 rounded-lg">
                    <h5 className="text-lg font-semibold text-green-400 mb-2">Stud</h5>
                    <p className="text-gray-300">
                      Với nhóm này, người chơi sẽ được chia từ 5 đến 7 lá bài Xì Tố. Một số lá bài sẽ được úp và một số lá bài sẽ được ngửa lên. Đặc biệt, vị trí các lá bài trong phiên bản này cố định xuyên suốt ván cược.
                    </p>
                  </div>
                  
                  <div className="bg-gray-700 p-6 rounded-lg">
                    <h5 className="text-lg font-semibold text-green-400 mb-2">Community card</h5>
                    <p className="text-gray-300">
                      Ban đầu, người chơi Xì Tố sẽ được phát một vài lá bài riêng. Sau đó, một số lá bài chung sẽ được lật lên và bạn cần phối hợp bài của mình với bài chung để tạo ra tổ hợp mạnh nhất có thể.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose 8xBet</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<Shield className="w-12 h-12 text-green-500" />}
              title="Secure Platform"
              description="State-of-the-art encryption and security measures to protect your data and transactions"
            />
            <FeatureCard
              icon={<Trophy className="w-12 h-12 text-green-500" />}
              title="Competitive Odds"
              description="Get the best odds in the market across all major sports and events"
            />
            <FeatureCard
              icon={<Users className="w-12 h-12 text-green-500" />}
              title="24/7 Support"
              description="Our dedicated support team is always ready to assist you"
            />
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Popular Sports</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Football', 'Basketball', 'Tennis', 'Cricket', 'Boxing', 'Baseball', 'Rugby', 'eSports'].map((sport) => (
              <div key={sport} className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition duration-300 cursor-pointer">
                <h3 className="text-xl font-semibold">{sport}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard
              icon={<Wallet className="w-8 h-8" />}
              title="Quick Payouts"
              description="Fast and secure withdrawal processing within 24 hours"
            />
            <BenefitCard
              icon={<Clock className="w-8 h-8" />}
              title="Live Betting"
              description="Real-time odds and live streaming of major sporting events"
            />
            <BenefitCard
              icon={<Gift className="w-8 h-8" />}
              title="Welcome Bonus"
              description="Get up to $200 bonus on your first deposit"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Start Winning?</h2>
          <p className="text-xl mb-8">Join thousands of successful bettors on 8xBet</p>
          <button className="bg-white text-green-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 flex items-center mx-auto">
            Create Account <ChevronRight className="ml-2" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">About 8xBet</h3>
              <p className="text-gray-400">Your trusted online betting platform offering a wide range of sports betting options with competitive odds.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center"><Globe className="w-4 h-4 mr-2" /> www.8xbet.com</p>
                <p className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +1-888-8XBET</p>
                <p className="flex items-center"><Mail className="w-4 h-4 mr-2" /> support@8xbet.com</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Responsible Gaming</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <p className="text-gray-400">Licensed and regulated by the Gaming Authority. Please bet responsibly.</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 8xBet. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-800 p-8 rounded-lg text-center">
      <div className="flex justify-center mb-6">{icon}</div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function BenefitCard({ icon, title, description }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg hover:transform hover:-translate-y-2 transition duration-300">
      <div className="flex items-center mb-4">
        <div className="bg-green-500 p-3 rounded-full mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default App;