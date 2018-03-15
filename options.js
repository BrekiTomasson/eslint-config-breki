const eslint = require('eslint')
const path = require('path')
const pkg = require('./package.json')

const quoteArray = [
  'Truth can only be found in one place: the code.',
  'It is not enough for code to work.',
  'Indeed, the ratio of time spent reading versus writing is well over 10 to 1. We are constantly reading old code ' +
  'as part of the effort to write new code. ... Therefore, making it easy to read makes it easier to write.',
  'So if you want to go fast, if you want to get done quickly, if you want your code to be easy to write, make it ' +
  'easy to read.',
  'A long descriptive name is better than a short enigmatic name. A long descriptive name is better than a long ' +
  ' descriptive comment.',
  'Clean code is not written by following a set of rules. You don’t become a software craftsman by learning a list ' +
  'of heuristics. Professionalism and craftsmanship come from values that drive disciplines.',
  'You should name a variable using the same care with which you name a first-born child.',
  'It is not the language that makes programs appear simple. It is the programmer that make the language appear ' +
  'simple!',
  'Of course bad code can be cleaned up. But it’s very expensive.',
  'Programmers must avoid leaving false clues that obscure the meaning of code.',
  'You are reading this book for two reasons. First, you are a programmer. Second, you want to be a better ' +
  'programmer. Good. We need better programmers.',
  'Clean code always looks like it was written by someone who cares.',
  'One difference between a smart programmer and a professional programmer is that the professional understands ' +
  'that clarity is king. Professionals use their powers for good and write code that others can understand.',
  'The problem isn’t the simplicity of the code but the implicity of the code (to coin a phrase): the degree to ' +
  'which the context is not explicit in the code itself.',
  'There are two parts to learning craftsmanship: knowledge and work. You must gain the knowledge of principles, ' +
  'patterns, practices, and heuristics that a craftsman knows, and you must also grind that knowledge into your ' +
  'fingers, eyes, and gut by working hard and practicing.',
  'If the discipline of requirements specification has taught us anything, it is that well-specified requirements ' +
  'are as formal as code and can act as executable tests of that code!',
  'Redundant comments are just places to collect lies and misinformation.',
  'Clean code is simple and direct. Clean code reads like well-written prose. Clean code never obscures the ' +
  'designer’s intent but rather is full of crisp abstractions and straightforward lines of control.',
  'Writing clean code is what you must do in order to call yourself a professional. There is no reasonable excuse ' +
  'for doing anything less than your best.',
  'How can we make sure we wind up behind the right door when the going gets tough? The answer is: craftsmanship.',
  'Who can justify the expense of a six-lane highway through the middle of a small town that anticipates growth? ' +
  'Who would want such a road through their town?',
  'Code, without tests, is not clean. No matter how elegant it is, no matter how readable and accessible, if it ' +
  'hath not tests, it be unclean.',
  'Perhaps you thought that getting it working was the first order of business for a professional developer. I hope ' +
  'by now, however, that this book has disabused you of that idea. The functionality that you create today has a ' +
  'good chance of changing in the next release, but the readability of your code will have a profound effect on ' +
  'all the changes that will ever be made.',
  'A system that is comprehensively tested and passes all of its tests all of the time is a testable system. That’s ' +
  'an obvious statement, but an important one. Systems that aren’t testable aren’t verifiable. Arguably, a ' +
  'system that cannot be verified should never be deployed.',
  'Honesty in small things is not a small thing.',
  'It is a myth that we can get systems right the first time. Instead, we should implement only today’s stories, ' +
  'then refactor and expand the system to implement new stories tomorrow. This is the essence of iterative ' +
  'and incremental agility. Test-driven development, refactoring, and the clean code they produce make this work ' +
  'at the code level.',
  'Objects hide their data behind abstractions and expose functions that operate on that data. Data structure ' +
  'expose their data and have no meaningful functions.',
  'Error handling is important, but if it obscures logic, it’s wrong.',
  'Say what you mean. Mean what you say.',
  'These comments are so noisy that we learn to ignore them. As we read through code, our eyes simply skip over ' +
  'them. Eventually the comments begin to lie as the code around them changes.',
  'if I must encode either the interface or the implementation, I choose the implementation. Calling it ' +
  'ShapeFactoryImp, or even the hideous CShapeFactory, is preferable to encoding the interface',
  'When you see commented-out code, delete it!',
  'The only way to make the deadline - the only way to go fast - is to keep the code as clean as possible at ' +
  'all times.',
  'Why does good code rot so quickly into bad code? We have lots of explanations for it. We complain that the ' +
  'requirements changed in ways that thwart the original design. We bemoan the schedules that were too tight to ' +
  'do things right. We blather about stupid managers and intolerant customers and useless marketing types ' +
  'and telephone sanitizers. But the fault, dear Dilbert, is not in our stars, but in ourselves. We are ' +
  'unprofessional.',
  'Because this ratio is so high, we want the reading of code to be easy, even if it makes the writing harder. ' +
  'Of course there’s no way to write code without reading it, so making it easy to read actually makes it easier ' +
  'to write.',
  'It is not the language that makes programs appear simple. It is the programmer that make the language ' +
  'appear simple!',
  'Indeed, many of the recommendations in this book are controversial. You will probably not agree with all of them.',
  'The ratio of time spent reading vs. writing is well over 10:1.',
  'Professionals use their powers for good and write code that others can understand.',
  'The first rule of functions is that they should be small. The second rule of functions is that they should ' +
  'be smaller than that.',
  'Cuteness in code often appears in the form of colloquialisms or slang. For example, don’t use the name whack() ' +
  'to mean kill(). Don’t tell little culture-dependent jokes like eatMyShorts() to mean abort().',
  'If your function must change the state of something, have it change the state of its owning object.',
  'Code formatting is important. It is too important to ignore and it is too important to treat religiously. ' +
  'Code formatting is about communication, and communication is the professional developer’s first order of ' +
  'business.',
  'Duplication and expressiveness take me a very long way into what I consider clean code, and improving dirty ' +
  'code with just these two things in mind can make a huge difference. There is, however, one other thing that ' +
  'I’m aware of doing, which is a bit harder to explain.',
  'Encapsulation is broken because all functions in the path of a throw must know about details of that ' +
  'low-level exception. Given that the purpose of exceptions is to allow you to handle errors at a distance, it ' +
  'is a shame that checked exceptions break encapsulation in this way.',
  'It’s confusing to have a controller and a manager and a driver in the same code base. What is the essential ' +
  'difference between a DeviceManager and a Protocol-Controller? Why are both not controllers or both not ' +
  'managers? Are they both Drivers really? The name leads you to expect two objects that have very different type ' +
  'as well ashaving different classes. A consistent lexicon is a great boon to the programmers who must use your ' +
  'code.',
  'Returning null from methods is bad, but passing null into methods is worse.',
  'I like my code to be elegant and efficient. The logic should be straightforward to make it hard for bugs to ' +
  'hide, the dependencies minimal to ease maintenance, error handling complete according to an articulated ' +
  'strategy, and performance close to optimal so as not to tempt people to make the code messy with unprincipled ' +
  'optimizations. Clean code does one thing well.',
  'What this team did not realize was that having dirty tests is equivalent to, if not worse than, having no tests.',
  'Clean code can be read, and enhanced by a developer other than its original author. It has unit and ' +
  'acceptance tests. It has meaningful names. It provides one way rather than many ways for doing one thing. It ' +
  'has minimal dependencies, which are explicitly defined, and provides a clear and minimal API. Code should ' +
  'be literate since depending on the language, not all necessary information can be expressed clearly in ' +
  'code alone.',
  'If you let the tests rot, then your code will rot too. Keep your tests clean.',
  'To write clean code, you must first write dirty code and then clean it.',
  'Good software designs accommodate change without huge investments and rework. When we use code that is out of ' +
  'our control, special care must be taken to protect our investment and make sure future change is not too costly.',
  'One of the best ways to ruin a program is to make massive changes to its structure in the name of improvement. ' +
  'Some programs never recover from such improvements. The problem is that it’s very hard to get the program ' +
  'working the same way it worked before the improvement.',
  'Building a project should be a single trivial operation.',
  'Nothing has a more profound and long-term degrading effect upon a development project than bad code. Bad ' +
  'schedules can be redone, bad requirements can be redefined. Bad team dynamics can be repaired. But bad code ' +
  'rots and ferments, becoming an inexorable weight that drags the team down.'
]

module.exports = {
  bugs: pkg.bugs.url,
  cmd: 'lint',
  cwd: '',
  eslint: eslint,
  eslintConfig: { configFile: path.join(__dirname, 'eslintrc.json') },
  homepage: pkg.homepage,
  tagline: quoteArray[Math.floor(Math.random() * quoteArray.length)],
  version: pkg.version
}
