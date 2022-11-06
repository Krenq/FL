
import DropItemDown from "../DropItemDown/DropItemDown"

const DropBuyers = ({ show, setShow, scrollMenu, showDrop }) => {
	return (
		<>
			<div onMouseEnter={showDrop} onMouseLeave={setShow} className={`${show.showBuyers ? 'active' : "hiddenCustom"} absolute top-70 ${scrollMenu ? 'top-10 !fixed' : ""} left-0 right-0 bg-red h-10 z-30`}></div>

			<section onMouseEnter={showDrop} onMouseLeave={setShow} className={`itemDrop absolute flex z-20 .2x1:h-44 h-56 border-t border-gray transition-all bg-white mt-9  ${scrollMenu ? '!mt-7' : ""} ${show.showBuyers ? 'active' : "hiddenCustom"}`}>
				<div className="w-1816px my-0 mx-auto flex items-center justify-center">
					<DropItemDown title='ДОСТАВКА.ОПЛАТА.ВОЗВРАТ' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFxcXFxcXFRcXFRUXFxcXFxUXFxgYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQYFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOAA4AMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIG/8QAHRABAQEAAwEAAwAAAAAAAAAAAAERAjFxAyGx8P/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A6oBQKAIqLAAANRQARQMNABFqAoAAYACLAAgBoICtfPuexhrh3PYCUAAgAEAAAEWgAAAigCYoAAAAAAAACLQBG+Hc9jK8O57AEDQQWlBRN/tACmroM1YQBUwoAiygJGkNAA0BFoCwTQApq6DNWEAVeHc9jLXz7noM0AEUACJVAKAAJQU1IoCLABKqAoAAABEqwAoAAANcL+Z7GI38+57AZtAAAAIQoAABTQAKAAAIoAABgEACAEAADQBrh3PWavDuewAxADDBQBCAFhQAVAUQBcQAIqUAXEMAwwWgIAGFhQAAFXh3PYy18+57P2DIAFgaAixFgBSAJBdAIIoERTQEVAUgAVF0BFiLAChQENUCNcO57GG/n3PYDIWAAEACQwADQMEUAMAAKAC4CBYABoAEhgAGgCKA18+57EsXh3PQZAApgUAgABQCFNQFqoAsQwlAwEBVQAMCgCKAABA1AWtcO57GG/n3PYDOgAAAixFgAACC0EUADBAVKqYC6AAACLEWAAACLQRv59z2MtcO56DIAAICiwBAKAIsAFtSgAABFBlQAgICigIBQBFAXh3PYVeE/M9gMmhoFVADQIBaqFAgaAAaBKCAtpogKaAFWoAaBANXUpQIAA18+57GWuHc9gMhQAMARYEACABQoJFAAABFiAoUADAEqhACkACmAJG/n3PYy1w7noMhVwEDDAIVUADCwDQALBagAuIAEUEBcBAMAgsJQQMLANAgFX59z2C8O57Af//Z' />
					<DropItemDown title='ONLINE-БОНУС' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFxcXFxcXFRcXFRUXFxcXFxUXFxgYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQYFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOAA4AMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIG/8QAHRABAQEAAwEAAwAAAAAAAAAAAAERAjFxAyGx8P/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A6oBQKAIqLAAANRQARQMNABFqAoAAYACLAAgBoICtfPuexhrh3PYCUAAgAEAAAEWgAAAigCYoAAAAAAAACLQBG+Hc9jK8O57AEDQQWlBRN/tACmroM1YQBUwoAiygJGkNAA0BFoCwTQApq6DNWEAVeHc9jLXz7noM0AEUACJVAKAAJQU1IoCLABKqAoAAABEqwAoAAANcL+Z7GI38+57AZtAAAAIQoAABTQAKAAAIoAABgEACAEAADQBrh3PWavDuewAxADDBQBCAFhQAVAUQBcQAIqUAXEMAwwWgIAGFhQAAFXh3PYy18+57P2DIAFgaAixFgBSAJBdAIIoERTQEVAUgAVF0BFiLAChQENUCNcO57GG/n3PYDIWAAEACQwADQMEUAMAAKAC4CBYABoAEhgAGgCKA18+57EsXh3PQZAApgUAgABQCFNQFqoAsQwlAwEBVQAMCgCKAABA1AWtcO57GG/n3PYDOgAAAixFgAACC0EUADBAVKqYC6AAACLEWAAACLQRv59z2MtcO56DIAAICiwBAKAIsAFtSgAABFBlQAgICigIBQBFAXh3PYVeE/M9gMmhoFVADQIBaqFAgaAAaBKCAtpogKaAFWoAaBANXUpQIAA18+57GWuHc9gMhQAMARYEACABQoJFAAABFiAoUADAEqhACkACmAJG/n3PYy1w7noMhVwEDDAIVUADCwDQALBagAuIAEUEBcBAMAgsJQQMLANAgFX59z2C8O57Af//Z' />
					<DropItemDown title='ОБРАТНАЯ СВЯЗЬ' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFxcXFxcXFRcXFRUXFxcXFxUXFxgYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQYFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOAA4AMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIG/8QAHRABAQEAAwEAAwAAAAAAAAAAAAERAjFxAyGx8P/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A6oBQKAIqLAAANRQARQMNABFqAoAAYACLAAgBoICtfPuexhrh3PYCUAAgAEAAAEWgAAAigCYoAAAAAAAACLQBG+Hc9jK8O57AEDQQWlBRN/tACmroM1YQBUwoAiygJGkNAA0BFoCwTQApq6DNWEAVeHc9jLXz7noM0AEUACJVAKAAJQU1IoCLABKqAoAAABEqwAoAAANcL+Z7GI38+57AZtAAAAIQoAABTQAKAAAIoAABgEACAEAADQBrh3PWavDuewAxADDBQBCAFhQAVAUQBcQAIqUAXEMAwwWgIAGFhQAAFXh3PYy18+57P2DIAFgaAixFgBSAJBdAIIoERTQEVAUgAVF0BFiLAChQENUCNcO57GG/n3PYDIWAAEACQwADQMEUAMAAKAC4CBYABoAEhgAGgCKA18+57EsXh3PQZAApgUAgABQCFNQFqoAsQwlAwEBVQAMCgCKAABA1AWtcO57GG/n3PYDOgAAAixFgAACC0EUADBAVKqYC6AAACLEWAAACLQRv59z2MtcO56DIAAICiwBAKAIsAFtSgAABFBlQAgICigIBQBFAXh3PYVeE/M9gMmhoFVADQIBaqFAgaAAaBKCAtpogKaAFWoAaBANXUpQIAA18+57GWuHc9gMhQAMARYEACABQoJFAAABFiAoUADAEqhACkACmAJG/n3PYy1w7noMhVwEDDAIVUADCwDQALBagAuIAEUEBcBAMAgsJQQMLANAgFX59z2C8O57Af//Z' />
					<DropItemDown title='СЕРВИСНЫЕ ЦЕНТРЫ' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFxcXFxcXFRcXFRUXFxcXFxUXFxgYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQYFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOAA4AMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIG/8QAHRABAQEAAwEAAwAAAAAAAAAAAAERAjFxAyGx8P/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A6oBQKAIqLAAANRQARQMNABFqAoAAYACLAAgBoICtfPuexhrh3PYCUAAgAEAAAEWgAAAigCYoAAAAAAAACLQBG+Hc9jK8O57AEDQQWlBRN/tACmroM1YQBUwoAiygJGkNAA0BFoCwTQApq6DNWEAVeHc9jLXz7noM0AEUACJVAKAAJQU1IoCLABKqAoAAABEqwAoAAANcL+Z7GI38+57AZtAAAAIQoAABTQAKAAAIoAABgEACAEAADQBrh3PWavDuewAxADDBQBCAFhQAVAUQBcQAIqUAXEMAwwWgIAGFhQAAFXh3PYy18+57P2DIAFgaAixFgBSAJBdAIIoERTQEVAUgAVF0BFiLAChQENUCNcO57GG/n3PYDIWAAEACQwADQMEUAMAAKAC4CBYABoAEhgAGgCKA18+57EsXh3PQZAApgUAgABQCFNQFqoAsQwlAwEBVQAMCgCKAABA1AWtcO57GG/n3PYDOgAAAixFgAACC0EUADBAVKqYC6AAACLEWAAACLQRv59z2MtcO56DIAAICiwBAKAIsAFtSgAABFBlQAgICigIBQBFAXh3PYVeE/M9gMmhoFVADQIBaqFAgaAAaBKCAtpogKaAFWoAaBANXUpQIAA18+57GWuHc9gMhQAMARYEACABQoJFAAABFiAoUADAEqhACkACmAJG/n3PYy1w7noMhVwEDDAIVUADCwDQALBagAuIAEUEBcBAMAgsJQQMLANAgFX59z2C8O57Af//Z' />
					<DropItemDown isLast={true} title='МАТЕРИАЛЫ' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFxcXFxcXFRcXFRUXFxcXFxUXFxgYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQYFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOAA4AMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIG/8QAHRABAQEAAwEAAwAAAAAAAAAAAAERAjFxAyGx8P/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A6oBQKAIqLAAANRQARQMNABFqAoAAYACLAAgBoICtfPuexhrh3PYCUAAgAEAAAEWgAAAigCYoAAAAAAAACLQBG+Hc9jK8O57AEDQQWlBRN/tACmroM1YQBUwoAiygJGkNAA0BFoCwTQApq6DNWEAVeHc9jLXz7noM0AEUACJVAKAAJQU1IoCLABKqAoAAABEqwAoAAANcL+Z7GI38+57AZtAAAAIQoAABTQAKAAAIoAABgEACAEAADQBrh3PWavDuewAxADDBQBCAFhQAVAUQBcQAIqUAXEMAwwWgIAGFhQAAFXh3PYy18+57P2DIAFgaAixFgBSAJBdAIIoERTQEVAUgAVF0BFiLAChQENUCNcO57GG/n3PYDIWAAEACQwADQMEUAMAAKAC4CBYABoAEhgAGgCKA18+57EsXh3PQZAApgUAgABQCFNQFqoAsQwlAwEBVQAMCgCKAABA1AWtcO57GG/n3PYDOgAAAixFgAACC0EUADBAVKqYC6AAACLEWAAACLQRv59z2MtcO56DIAAICiwBAKAIsAFtSgAABFBlQAgICigIBQBFAXh3PYVeE/M9gMmhoFVADQIBaqFAgaAAaBKCAtpogKaAFWoAaBANXUpQIAA18+57GWuHc9gMhQAMARYEACABQoJFAAABFiAoUADAEqhACkACmAJG/n3PYy1w7noMhVwEDDAIVUADCwDQALBagAuIAEUEBcBAMAgsJQQMLANAgFX59z2C8O57Af//Z' />


				</div>
			</section >
		</>
	)
}
export default DropBuyers